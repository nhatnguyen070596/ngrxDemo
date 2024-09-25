import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ScheduleService } from "../../services/schedule.service";
import { addSchedule, addScheduleFailure, addScheduleSuccess, loadSchedule, loadScheduleFailure, loadScheduleSuccess } from "../actions/schedule.action";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class ScheduleEffects {
    constructor (private actions$: Actions, private scheduleService: ScheduleService) 
    {}
    loadSchedules$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadSchedule),
          switchMap(() =>
            this.scheduleService.getSchedule().pipe(
              map(schedules  => 
                loadScheduleSuccess({ schedules })
                ),
              catchError(error => of(loadScheduleFailure({ error })))
            )
          )
        )
      );
      addSchedule$ = createEffect(() =>
        this.actions$.pipe(
          ofType(addSchedule),
          switchMap(({ schedule }) =>
            this.scheduleService.addSchedule(schedule).pipe(
              map(addedSchedule => addScheduleSuccess({ schedule: addedSchedule })),
              catchError(error => of(addScheduleFailure({ error })))
            )
          )
        )
      );
}
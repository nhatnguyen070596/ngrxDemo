import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Schedule } from '../../model/schedule.model';
import { loadSchedule } from '../../store/actions/schedule.action';
import { selectAllSchedules } from '../../store/selectors/schedule.selectors';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
})
export class ScheduleListComponent {
  schedules$: Observable<Schedule[]>;

  constructor(private store: Store) {
    this.schedules$ = this.store.pipe(select(selectAllSchedules));
    this.store.dispatch(loadSchedule());
    console.log(this.schedules$);
  }
}

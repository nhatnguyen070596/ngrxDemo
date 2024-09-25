import { createSelector } from '@ngrx/store';
import { ScheduleState } from '../reducers/shedule.reducer';

export const selectSchedulesState = (state: any) => state.schedules;

export const selectAllSchedules = createSelector(
    selectSchedulesState,
  (state: ScheduleState) => state.schedules
);

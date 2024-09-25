import { Action, createReducer, on } from '@ngrx/store';
import { addScheduleSuccess, loadScheduleSuccess } from '../actions/schedule.action';
import { Schedule } from '../../model/schedule.model';

export interface ScheduleState {
  schedules: Schedule[];
  error: string | null;
}

export const initialScheduleState: ScheduleState = {
  schedules: [],
  error: null,
};

const scheduleReducer = createReducer(
  initialScheduleState,
  on(loadScheduleSuccess, (state, { schedules }) => ({ ...state, schedules })),
  on(addScheduleSuccess, (state, { schedule }) => ({
    ...state,
    schedules: [...state.schedules, schedule]
  }))
);

export function reducer(state: ScheduleState | undefined, action: Action) {
  return scheduleReducer(state, action);
}
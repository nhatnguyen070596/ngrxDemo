import { createAction, props } from '@ngrx/store';
import { Schedule } from '../../model/schedule.model';

export const loadSchedule = createAction('[Product] Load Schedule');
export const loadScheduleSuccess = createAction('[Product] Load Schedule Success', props<{ schedules: Schedule[] }>());
export const loadScheduleFailure = createAction('[Product] Load Schedule Failure', props<{ error: any }>());

export const addSchedule = createAction('[Schedule] Add Schedule', props<{ schedule: Schedule }>());
export const addScheduleSuccess = createAction('[Schedule] Add Schedule Success',props<{ schedule: Schedule }>());
export const addScheduleFailure = createAction('[Schedule] Add Schedule Failure',props<{ error: any }>());

export const updateSchedule = createAction('[Schedule] Update Schedule', props<{ Schedule: Schedule }>());
export const deleteSchedule = createAction('[Schedule] Delete Schedule', props<{ schId: string }>());
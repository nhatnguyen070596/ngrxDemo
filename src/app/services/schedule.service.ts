import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Schedule } from '../model/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 constructor(private httpClient: HttpClient) {}
 private apiUrl = 'https://localhost:7101/Schedule'; // Base API URL

  getSchedule(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`${this.apiUrl}/GetAllSchedules`);
  }

  addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.httpClient.post<Schedule>(`${this.apiUrl}/AddSchedule`, schedule);
  }
}
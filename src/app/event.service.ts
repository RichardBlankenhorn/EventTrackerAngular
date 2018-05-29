import { Event } from './event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // private url = 'http://localhost:8080/api/rides/';
  private baseUrl = '/CyclingRest/';
  private supUrl = 'api/rides/';

  index() {
    return this.http.get<Event[]>(this.baseUrl + this.supUrl).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Index Error');
      })
    );
  }

  create(event) {
    return this.http.post<Event>(this.baseUrl + this.supUrl, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Create Error');
      })
    );
  }

  delete(id) {
    return this.http.delete(this.baseUrl + this.supUrl + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Delete Error');
      })
    );
  }

  update(id, event) {
    return this.http.put(this.baseUrl + this.supUrl + id, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Update Error');
      })
    );
  }

  constructor(private http: HttpClient) { }
}

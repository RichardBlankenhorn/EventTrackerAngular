import { Event } from './event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'http://localhost:8080/api/rides/';

  index() {
    return this.http.get<Event[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Index Error');
      })
    );
  }

  create(event) {
    return this.http.post<Event>(this.url, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Create Error');
      })
    );
  }

  delete(id) {
    return this.http.delete(this.url + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Delete Error');
      })
    );
  }

  update(id, event) {
    return this.http.put(this.url + id, event).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Update Error');
      })
    );
  }

  constructor(private http: HttpClient) { }
}

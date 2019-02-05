import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { MessageService } from "./message.service";

import { JumpRun } from "./libs/common";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class JumpRunService {

  private jumpRunUrl = 'api/jumpRuns';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getJumpRuns(): Observable<JumpRun[]> {
    return this.http.get<JumpRun[]>(this.jumpRunUrl)
      .pipe(
        tap(_ => this.log('fetched Jump Runs')),
        catchError(this.handleError('getJumpRuns', []))
      )
  }

  getJumpRun(id: number): Observable<JumpRun> {
    const url = `${this.jumpRunUrl}/${id}`;
    return this.http.get<JumpRun>(url)
      .pipe(
        tap(_ => this.log(`fetched Jump Run id=${id}`)),
        catchError(this.handleError<JumpRun>(`getJumpRun id=${id}`))
      );
  }

  updateJumpRun(run: JumpRun): Observable<any> {
    return this.http.put(this.jumpRunUrl, run, httpOptions)
      .pipe(
        tap(_ => this.log(`updated Jump Run id=${run.id}`)),
        catchError(this.handleError<any>('updateJumpRun'))
      )
  }

  addJumpRun(run: JumpRun): Observable<JumpRun> {
    return this.http.post<JumpRun>(this.jumpRunUrl, run, httpOptions)
      .pipe(
        tap((newJumpRun: JumpRun) => this.log(`added Jump Run w/ id=${newJumpRun.id}`)),
        catchError(this.handleError<JumpRun>('addJumpRun'))
      )
  }

  deleteJumpRun(run: JumpRun | number): Observable<JumpRun> {
    const id = typeof run === 'number' ? run : run.id;
    const url = `${this.jumpRunUrl}/${id}`;

    return this.http.delete<JumpRun>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Jump Run id=${id}`)),
      catchError(this.handleError<JumpRun>('deleteJumpRun'))
    );
  }


  private log(message: string) {
    this.messageService.add(`JumpRunsService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} fails: ${error.message}`);
      return of(result as T);
    }
  }
}

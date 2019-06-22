import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod,  } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { Question } from '../lib/question';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private dominio = "culture";

  constructor(private http: HttpClient) { }

  AddQuestion (question: Question): Observable<Question> {
    return this.http.post<Question>(this.dominio + '/addQuestion'  , question, httpOptions )
    .pipe( );
    }
}

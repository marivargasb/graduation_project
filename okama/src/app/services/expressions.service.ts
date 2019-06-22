import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod,  } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { Expression } from '../lib/expression';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}; 

@Injectable({
  providedIn: 'root'
})
export class ExpressionsService {
  private dominio = "expression";

  constructor(private http: HttpClient) { }

  AddExpression (expression: Expression, id): Observable<Expression> {
    //alert("console service jijiiji" + expression.name); 
    return this.http.post<Expression>(this.dominio + '/addExpression' + `/${id}` , expression, httpOptions )
    .pipe( );
    }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod,  } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { Culture } from '../lib/culture';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CultureService {

 private dominio = "culture";

  constructor(private http: HttpClient) { }


  AddCulture(culture: Culture):Observable<Culture>{

    alert("entro a service");
    console.log(culture.name + culture.description + culture.territory);
    return this.http.post<Culture>(this.dominio + '/addCulture', culture, httpOptions )
    .pipe( );

  }



  GetCulture(): Observable<Culture[]>{
     
    alert("aca dentro");     
    return this.http.get<Culture[]> (this.dominio + '/fineCulture')
    .pipe();

}

}

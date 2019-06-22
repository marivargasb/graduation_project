import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod,  } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { Manager } from '../lib/manager';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const params = new HttpParams().set('q', 'cironunes');

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 // private tasksUrl = "localhost:8000/manager/add";  // URL to web api
  //private dominio = "localhost:8000/manager/fineManager";

 private tasksUrl= "manager/add";
 private dominio = "manager";

  constructor(private http: HttpClient ) { }



  AddManager (manager: Manager): Observable<Manager> {
    //alert("console service jijiiji" + manager.name); 
    return this.http.post<Manager>(this.dominio + '/add', manager, httpOptions )
    .pipe( );
    }

   GetManager(): Observable<Manager[]>{
     
    alert("aca dentro");     
    return this.http.get<Manager[]> (this.dominio + '/fineManager')
    .pipe();

}

LoginManager(manager: Manager): Observable<Manager> {

  return this.http.post<Manager>( this.dominio + '/login', manager, httpOptions)
    .pipe();

}


}

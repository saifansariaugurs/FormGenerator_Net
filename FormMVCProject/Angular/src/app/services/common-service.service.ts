import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,throwError  } from 'rxjs';
import { catchError, map, tap,retry  } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class CommonServiceService {

  constructor(private http:HttpClient) { }
 baseUrl:string='https://localhost:44303/api/FormAPI/';
 //baseUrl:string='http://geligulu.augursapps.com/api/FormAPI/';


  manageStatusMaster(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl+'manageStatusMaster', data, httpOptions)
  }

  manageApplication(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl+'ManageApplication', data, httpOptions)
  }

  manageTopic(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl+'ManageTopic', data, httpOptions)
  }


}
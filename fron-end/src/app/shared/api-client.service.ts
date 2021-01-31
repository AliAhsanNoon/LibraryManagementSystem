import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`);
  }
  getById(path: string, Id: any): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}/${Id}`);
  }
  post(path: string, data: any): Observable<any> {
    return this.http.post(`${environment.apiURL}${path}`, data);
  }
  update(path: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiURL}${path}`, data);
  }
  delete(path: string, data: any): Observable<any> {
    return this.http.patch(`${environment.apiURL}${path}`, data);
  }
}

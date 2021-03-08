import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(public http: HttpClient) {

    this.url = 'http://172.50.0.6:3000';
  }
  getGlobal<Object>(url: string) {
    return this.http.get<Object>(this.url + url);
  }
  postGlobal<Object>(url: string, objeto: any) {
      return this.http.post<Object>(this.url + url, objeto, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
          ,
      });
  }
  deleteGlobal<Object>(url: string, codigo: string) {
      return this.http.delete<Object>(this.url + url + codigo, {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
  }

  putGlobal<Object>(url: string, id: string, objeto: any) {
      return this.http.put<Object>(this.url + url + id, objeto, {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
  }
}

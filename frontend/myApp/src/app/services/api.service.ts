import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from '../../types';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // post(url: string, body: any, arg2: {}): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}

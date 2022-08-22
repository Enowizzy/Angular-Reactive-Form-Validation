import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  _url = 'http://localhost:8000/enroll';
  constructor(private _http: HttpClient) {}

  // register(userData) {
  //   return this._http.post<any>(this._url, userData);
  // }
}

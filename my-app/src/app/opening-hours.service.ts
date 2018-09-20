import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class OpeningHoursService {

  constructor(private _http: HttpClient) { }

  getOpeningHours(){
    return this._http.get('https://bff-atis-app.cm.tm.kit.edu/opening-hours');
  }
}
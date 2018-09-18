import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  getLogin(username, password) {
    console.log(username + password);
    return this._http.get('https://workspace.cm.tm.kit.edu/SecureTest', {
      headers: {'Content-Type':'application/json','Authorization':'Basic ' + btoa(username + ':' + password)}
   });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrentUtilizationService {

  constructor(private _http: HttpClient) { }

  getLayout() {
    var url = 'https://bff-atis-app.cm.tm.kit.edu/layouts/1';
    return this._http.get(url);
  }

  getState() {
    var url = 'https://bff-atis-app.cm.tm.kit.edu/utilisation/workspaceState';
    return this._http.get(url);
  }

  getUtilization() {
    var url = 'https://bff-atis-app.cm.tm.kit.edu/utilisation';
    return this._http.get(url);
  }

}

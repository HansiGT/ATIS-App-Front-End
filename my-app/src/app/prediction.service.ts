import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PredictionService {

  constructor(private _http: HttpClient) { }

  getPrediction(date) {
    var url = 'https://utilization.cm.tm.kit.edu/prediction/date/' + date;
    return this._http.get(url);
  }
}

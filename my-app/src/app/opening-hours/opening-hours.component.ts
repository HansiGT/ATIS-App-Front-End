import { Component, OnInit } from '@angular/core';
import { OpeningHoursService } from '../opening-hours.service';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css']
})
export class OpeningHoursComponent implements OnInit {
  openingHours: Array<any>;

  constructor(private _OpeningHoursService: OpeningHoursService) { }

  ngOnInit() {
    this._OpeningHoursService.getOpeningHours().subscribe(
      res => {
        this.openingHours = res['openingHours'];
      }
    )
  }
}
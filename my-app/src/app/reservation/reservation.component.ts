import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  date;
  time;
  pcid;
  minDate = new Date();
 

  constructor() { }

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

}

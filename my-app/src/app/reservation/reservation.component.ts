import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { Meta } from '../../../node_modules/@angular/platform-browser';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  date: Date;
  time;
  pcid: number;
  minDate = new Date();
  displayedColumns: string[] = ['user', 'id', 'date', 'delete'];
  dataSource = [{user: "Sebastian Abeck", id: 1, date:"10:00 - 11:30, 21.09.2018", delete:"delete"}]

  constructor(private meta: Meta) { 
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
  }

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  makeReservation() {
    var start = this.date.getDay;
    var end; 
    var json = { "elementId":this.pcid, "workspaceId":1, "type": "PC", "start": start, "end": end};
    console.log(json);
  }
}

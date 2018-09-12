import { Component, OnInit } from '@angular/core';
import { Meta } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
   }

  ngOnInit() {
  }

}

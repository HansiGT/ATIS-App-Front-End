import { Component, OnInit } from '@angular/core';
import { OpeningHoursService } from '../opening-hours.service';
import { CurrentUtilizationService } from '../current-utilization.service';
import { Meta } from '../../../node_modules/@angular/platform-browser';

/*
each tile has text that it will display, a link to the page that the text describes
a size (rows, cols) and a color. Maybe there will also be a logo/icon
*/
export interface Tile {
  text: string;
  routerLink: string;
  imgSrc: string;
  cols: number;
  rows: number;
  color: string;
}

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  /*
  all tiles that will appear on the frontpage
  */
  tiles: Tile[] = [
    {
      text: 'Aktuelle Auslastung',
      routerLink: '/current-utilization',
      imgSrc: 'desktop_windows',
      cols: 1,
      rows: 1,
      color: '#3f51b5'
    },

    {
      text: 'Öffnungszeiten',
      routerLink: '/opening-hours',
      imgSrc: 'access_time',
      cols: 1,
      rows: 1,
      color: '#3f51b5'
    },

    {
      text: 'Reservierungen',
      routerLink: '/reservation',
      imgSrc: 'event_available',
      cols: 1,
      rows: 1,
      color: '#3f51b5'
    },

    {
      text: 'Vorhersage',
      routerLink: '/prediction',
      imgSrc: 'bar_chart',
      cols: 1,
      rows: 1,
      color: '#3f51b5'
    },
/**
    {
      text: 'Layout Editor',
      routerLink: '/layout-editor',
      imgSrc: 'view_compact',
      cols: 1,
      rows: 1,
      color: '#3f51b5'
    }
 */
  ];

  numberOfFreePCs;
  numberOfAllPCs;
  constructor(private _OpeningHoursService: OpeningHoursService, private _currentUtilizationService: CurrentUtilizationService, private meta: Meta) { 
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
  }

  ngOnInit() {
    this._currentUtilizationService.getUtilization()
      .subscribe(res => {
        this.numberOfFreePCs = res['free'];
        this.numberOfAllPCs = res['max'];
      })
  }


}

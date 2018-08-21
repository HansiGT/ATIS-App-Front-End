import { Component, OnInit } from '@angular/core';
export interface Tile {

  /*
  each tile has text that it will display, a link to the page that the text describes
  a size (rows, cols) and a color. Maybe there will also be a logo/icon
  */
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
      routerLink: 'current-utilization',
      imgSrc: 'desktop_windows',
      cols: 2,
      rows: 2,
      color: 'primary'
    },

    {
      text: 'Öffnungszeiten',
      routerLink: 'opening-hours',
      imgSrc: 'access_time',
      cols: 2,
      rows: 2,
      color: 'lightblue'
    },

    {
      text: 'Reservierungen',
      routerLink: 'NONE',
      imgSrc: 'alarm',
      cols: 2,
      rows: 2,
      color: 'lightblue'
    },

    {
      text: 'Vorhersage',
      routerLink: 'prediction',
      imgSrc: 'bar_chart',
      cols: 2,
      rows: 2,
      color: 'lightblue'
    },
/*
    {
      text: 'Layout Editor',
      routerLink: 'NONE',
      imgSrc: 'NONE',
      cols: 2,
      rows: 2,
      color: 'lightblue'
    }
*/
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { OpeningHoursService } from '../opening-hours.service';
import { OpeningHoursDialogComponent } from '../opening-hours-dialog/opening-hours-dialog.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Meta } from '../../../node_modules/@angular/platform-browser';


@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css'],
  providers: [OpeningHoursService]
})
export class OpeningHoursComponent implements OnInit {
  openingHours: Array<any>;

  constructor(private _OpeningHoursService: OpeningHoursService, public dialog: MatDialog, private meta: Meta) { 
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
  }
  /*
  openDialog(): void {
    const dialogRef = this.dialog.open(OpeningHoursDialogComponent, {
      height: "90vh"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result != undefined){
      console.log(JSON.stringify(result));
      this._OpeningHoursService.putOpeningHours(JSON.stringify(result)).subscribe((data:any) => {console.log(data)})
      }
    });
  }*/

  ngOnInit() {
    this._OpeningHoursService.getOpeningHours().subscribe(
      res => {
        this.openingHours = res['openingHours'];
      }
    )
  }
}
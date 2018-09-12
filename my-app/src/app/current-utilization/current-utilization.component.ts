import { Component, OnInit } from '@angular/core';
import { CurrentUtilizationService } from '../current-utilization.service';
import { Meta } from '../../../node_modules/@angular/platform-browser';
import { NgProgress } from '@ngx-progressbar/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-current-utilization',
  templateUrl: './current-utilization.component.html',
  styleUrls: ['./current-utilization.component.css']
})
export class CurrentUtilizationComponent implements OnInit {
  UNKNOWN_STATUS = 0;
  LINUX_AVAILABLE = 1;
  WINDOWS_AVAILABLE = 2;
  LINUX_OCCUPIED = 3;
  WINDOWS_OCCUPIED = 4;
  LAPTOP_AVAILABLE = 5;
  LAPTOP_OCCUPIED = 6;
  poolElements: Array<any>;
  percentageOccupied = 0;
  numberOfOccupiedPCs = 0;
  test = 10;
  unit = screen.width / 162;

  constructor(private _currentUtilizationService: CurrentUtilizationService, private meta:Meta, public progress: NgProgress) {
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=2, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
  }

  ngOnInit() {
    this.progress.start();
    this.displayLayout();
    this.getUtilizationInformation();

    setInterval(() => {
           this.updateCurrentStateOfElement();
           this.getUtilizationInformation();
    }, 30000);

    var roomCanvas = <HTMLCanvasElement> document.getElementById("roomCanvas");
    roomCanvas.width = screen.width;
    roomCanvas.height = screen.width;
    var doorCanvas = <HTMLCanvasElement> document.getElementById("doorCanvas");
    doorCanvas.width = screen.width;
    doorCanvas.height = screen.width;
  }

  displayLayout() {
    var unit = this.unit;
    this._currentUtilizationService.getLayout()
      .subscribe(res => {
        this.poolElements = res['poolElements'];
        res['rooms'].forEach(function (room) {

            var canvas = <HTMLCanvasElement> document.getElementById('roomCanvas');
            var context = canvas.getContext('2d');
            context.beginPath();

            //draw outline of room (not hard coded)
            for(var i = 0; i < room.pos.length - 1; i++) {
                context.moveTo(unit * room.pos[i].x, unit * room.pos[i].y);
                context.lineTo(unit * room.pos[i + 1].x, unit * room.pos[i + 1].y);
            }
            //connect to the first
            context.moveTo(unit * room.pos[room.pos.length - 1].x, unit * room.pos[room.pos.length - 1].y);
            context.lineTo(unit * room.pos[0].x, unit * room.pos[0].y);

            context.closePath();
            context.stroke();

            room.portalGates.forEach(function(portalGate) {
                if (portalGate.type == "door" || portalGate.type == "passage") {
                var canvas = <HTMLCanvasElement> document.getElementById('doorCanvas');
                var doorContext = canvas.getContext('2d');
                doorContext.beginPath();
                doorContext.moveTo(unit*portalGate.pos[0].x, unit*portalGate.pos[0].y );
                doorContext.lineTo(unit*portalGate.pos[1].x, unit*portalGate.pos[1].y );
                doorContext.lineWidth = unit*3;
                doorContext.strokeStyle="#1e90ff";
                doorContext.closePath();
                doorContext.stroke();
                }
            })
        })
        this.updateCurrentStateOfElement();
        });
  }

  getBackgroundImageByType(type: string) {
    switch (type) {
        case "PC":
            return "url('assets/img/current-utilization-icons/win_free.svg')";
        case "Laptop":
            return "url('assets/img/current-utilization-icons/laptop.png')";
        case "Printer":
            return "url('assets/img/current-utilization-icons/printer.svg')";
        case "wall":
            return "black";
        default:
    }
  }

  updateCurrentStateOfElement() {
    this._currentUtilizationService.getState()
      .subscribe(res => {
        this.progress.complete();
        res['data'].forEach(element => {
          var stateIconURL;
          switch (element.state) {
              case this.UNKNOWN_STATUS:
                  stateIconURL = "assets/img/current-utilization-icons/state_unknown.svg";
                  break;
              case this.WINDOWS_AVAILABLE:
                  stateIconURL = "assets/img/current-utilization-icons/win_free.svg";
                  break;
              case this.WINDOWS_OCCUPIED:
                  stateIconURL = "assets/img/current-utilization-icons/win_busy.svg";
                  break;
              case this.LINUX_AVAILABLE:
                  stateIconURL = "assets/img/current-utilization-icons/linux_free.svg";
                  break;
              case this.LINUX_OCCUPIED:
                  stateIconURL = "assets/img/current-utilization-icons/win_busy.svg";
                  break;
              default:
                  console.log("could not set image of element: " + element.id);
          }
          document.getElementById(element.type + element.id).style.backgroundImage = "url('" + stateIconURL + "')";
        })
      });
  }

  getUtilizationInformation() {
    this._currentUtilizationService.getUtilization()
      .subscribe(res => {
        this.percentageOccupied = res['percentageOccupied'];
        this.numberOfOccupiedPCs = res['occupied'];
      })
  }

}

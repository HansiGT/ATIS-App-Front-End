import { Component, OnInit} from '@angular/core';
import { PredictionService } from '../prediction.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { Chart } from 'chart.js';
import { Meta } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  date: Date;
  value = 0;
  initData = [1,1,1,1,1,1];
  chart = new Chart('canvas', {
    type: 'bar',
    data: {
        labels: ["8:00 - 9:30", "9:45 - 11:15", "11:30 - 13:00",
         "14:00 - 15:30", "15:45 - 17:15", "17:30 - 19:00"],
        datasets: [{
            data: this.initData,
            backgroundColor: [
                'rgb(102, 16, 242)',
            ],
            borderColor: [
                'rgb(102, 16, 242)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 72,
                    stepvalue: 8
                }
            }]
        }
    }
  });


  constructor(private _prediction: PredictionService, private meta: Meta) {
    this.meta.updateTag({ name:"viewport", content: 'user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi' });
  }

  ngOnInit() {
      const now = new Date();
      this._prediction.getPrediction(now.getFullYear() + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2))
        .subscribe(res => {
          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
                labels: ["8:00 - 9:30", "9:45 - 11:15", "11:30 - 13:00",
                 "14:00 - 15:30", "15:45 - 17:15", "17:30 - 19:00", "19:00-21:00"],
                datasets: [{
                    data: res,
                    backgroundColor: [
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                    ],
                    borderColor: [
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                      'rgb(63, 81, 181)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            min: 0,
                            max: 72,
                            stepSize:15
                        }
                    }]
                }
            }
          })
        })
  }

  displayPrediction() {
      this._prediction.getPrediction(this.date.getFullYear() + ("0" + (this.date.getMonth() + 1)).slice(-2) + ("0" + this.date.getDate()).slice(-2))
        .subscribe(res => {
          this.chart.data.datasets[0].data = res;
          this.chart.update();
        })
  }
  displayPredictionS() {
     this._prediction.getPredictionS(this.date.getDay()).subscribe(res => {
        this.chart.data.datasets[0].data = res;
        this.chart.update();
      })
    }
}

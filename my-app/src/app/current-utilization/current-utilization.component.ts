import { Component, OnInit } from '@angular/core';
import { CurrentUtilizationService } from '../current-utilization.service'

@Component({
  selector: 'app-current-utilization',
  templateUrl: './current-utilization.component.html',
  styleUrls: ['./current-utilization.component.css']
})
export class CurrentUtilizationComponent implements OnInit {
  poolElements: Array<any>;
  unit = screen.width / 162;

  constructor(private _currentUtilization: CurrentUtilizationService) {
  }

  ngOnInit() {
    this._currentUtilization.getLayout()
      .subscribe(data => {
        this.poolElements = data['poolElements'];
        });
  }

}

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
        this.poolElements = data.poolElements;
        this.poolElements.forEach(function (poolElement) {
            //place pool elements
            var board = document.createElement('div');
            board.className = "square";
            //get the id
            board.id = poolElement.type + poolElement.id;
            //set the position
            board.style.left = 10 * poolElement.pos.x + "px";
            board.style.top = 10 * poolElement.pos.y + "px";
            //set size
            board.style.width = 10 * poolElement.width + "px";
            board.style.height = 10 * poolElement.length + "px";

            document.getElementById("container").appendChild(board);

            //Put icon of the pool element in the layout

            switch (poolElement.type) {
                case "PC":
                    document.getElementById("" + board.id).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/win_free.png')";
                    break;
                case "Laptop":
                    document.getElementById("" + board.id).style.backgroundImage = "url('https://serving.photos.photobox.com/281944168551a46df5af4a102cc66386797df109483bb8ff961830b9d45e37e7f06cc8db.jpg')";
                    break;
                case "printer":
                    document.getElementById("" + board.id).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/win_free.png')";
                    break;
                case "wall":
                    document.getElementById("" + board.id).style.backgroundColor = "black";
                    break;
                default:
            }

            //Put id of the pool element in the layout
            var span = document.createElement('span');
            span.className = "span";
            span.innerHTML = "" + poolElement.id;
            document.getElementById("" + board.id).appendChild(span);

        });
      })

  }


}

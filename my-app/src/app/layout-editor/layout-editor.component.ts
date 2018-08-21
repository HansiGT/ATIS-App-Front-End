import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.css']
})
export class LayoutEditorComponent implements OnInit {
  NUMBER_OF_VERTICAL_ELEMENT = 81;
  NUMBER_OF_HORIZONTAL_ELEMENT = 70;
  // unit = 0.8*screen.width/this.NUMBER_OF_VERTICAL_ELEMENT;
  layoutWidth = 0;
  unit = 0;

  INDEX = 0;
  elementWidth = 0;
  elementHeight = 0;
  elementType = '';
  elementTypes = ['PC', 'Printer', 'Laptop', 'Wall', 'Door'];

  ngOnInit() {
    // document.getElementById("layout").style.width = 0.8*screen.width + 82 + 'px';
    // document.getElementById("layout").style.height = 0.8*screen.width+ 'px';
    // document.getElementById("element").style.height = 0.8*screen.width + 'px';
    this.layoutWidth = document.getElementById("layout").offsetWidth;
    this.unit = (this.layoutWidth - 30)/this.NUMBER_OF_VERTICAL_ELEMENT;
    this.createGridLayout();
  }

  createGridLayout() {
    for (var i = 0; i < this.NUMBER_OF_HORIZONTAL_ELEMENT; i++)
      for (var j = 0; j < this.NUMBER_OF_VERTICAL_ELEMENT; j++) {
        var gridElement = document.createElement('div');
        gridElement.style.width = this.unit + 'px';
        gridElement.style.height = this.unit + 'px';
        gridElement.style.border = '1px solid #000';
        gridElement.style.display = 'inline-block'
        gridElement.style.cssFloat = 'left';
        document.getElementById("layout").appendChild(gridElement);
      }
    console.log(this.unit);
    console.log(this.layoutWidth);
  }

  onDragStart(): void {
     console.log('got drag start');
   }

   onDragMove(event: PointerEvent): void {
     console.log(`got drag move ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
   }

   onDragEnd(event: PointerEvent): void {
     var element = document.createElement('div');
     element.style.position = "absolute";
     element.style.background = "black";
     element.style.top = event.clientY + document.documentElement.scrollTop + 'px';
     element.style.left = event.clientX + document.documentElement.scrollLeft + 'px';
     element.style.width = 5*this.unit + 'px';
     element.style.height = 5*this.unit + 'px';
     var container = <HTMLElement> document.getElementById('container');
     container.appendChild(element);
   }

   createElement() {
     console.log(this.elementWidth);
     console.log(this.elementHeight);
     console.log(this.elementType);
    var tempElement = document.getElementById('element' + this.INDEX);
    tempElement.style.width = this.elementWidth*this.unit + 'px';
    tempElement.style.height = this.elementHeight*this.unit + 'px';
    switch(this.elementType) {
      case 'PC':
          tempElement.style.background = "green";
          break;
      case 'Laptop':
          tempElement.style.background = "red";
          break;
      case 'Wall':
          tempElement.style.background = "black";
          break;
    }


   }



}

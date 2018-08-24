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
  layoutHeight = 0;
  unit = 0;
  show = false;
  INDEX = 0;
  elementWidth = 0;
  elementHeight = 0;
  elementType = '';
  elementTypes = ['PC', 'Printer', 'Laptop', 'Wall', 'Door'];
  srcElement: Element;
  addedElement: Array<HTMLElement> = new Array<HTMLElement>() ;

  ngOnInit() {
    // document.getElementById("layout").style.width = 0.8*screen.width + 82 + 'px';
    // document.getElementById("layout").style.height = 0.8*screen.width+ 'px';
    // document.getElementById("element").style.height = 0.8*screen.width + 'px';
    this.unit = (this.layoutWidth - 30)/this.NUMBER_OF_VERTICAL_ELEMENT;
  }

  createGridLayout() {
    this.show = true;
    document.getElementById("layout").style.width = this.layoutWidth*10 + "px";
    document.getElementById("layout").style.height = this.layoutHeight*10 + "px";
    for (var i = 0; i < this.layoutHeight; i++)
      for (var j = 0; j < this.layoutWidth; j++) {
        var gridElement = document.createElement('div');
        gridElement.style.width = 10 + 'px';
        gridElement.style.height = 10 + 'px';
        gridElement.style.border = '1px solid #000';
        gridElement.style.display = 'inline-block'
        gridElement.style.cssFloat = 'left';
        document.getElementById("layout").appendChild(gridElement);
      }
    console.log(this.layoutWidth);
  }

  onDragStart(event: PointerEvent): void {
     this.srcElement = event.srcElement;
   }

   onDragMove(event: PointerEvent): void {
     // console.log(`got drag move ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
   }

   onDragEnd(event: PointerEvent, srcElement: any): void {
     var element = <HTMLElement> document.createElement('div');
     element.style.position = "absolute";
     element.style.background = "black";
     element.style.top = event.clientY + document.documentElement.offsetTop  + 'px';
     element.style.left = event.clientX + document.documentElement.scrollLeft + 'px';
     element.style.width = srcElement.clientWidth + 'px';
     element.style.height = srcElement.clientHeight + 'px';
     element.style.background = srcElement.style.background;
     element.style.backgroundSize = 'contain';
     var container = <HTMLElement> document.getElementById('container');
     container.appendChild(element);

     // Check if the new element is overlapped the others
     // If yes, the new element will not be added
     var overlapped = false;
     for (let i=0; i < this.addedElement.length; i++){
       overlapped = overlapped || this.overlapped(element, this.addedElement[i]);
     }
     if (overlapped) {
       container.removeChild(element);
       alert('Element überschnitten!');
     }
     else this.addedElement.push(element);
     console.log("clientY" + event.clientY);
     console.log("element top" + element.style.top);
     console.log("scroll top " +document.documentElement.offsetTop);
   }

   createElement() {
    var tempElement = document.getElementById('element' + this.INDEX++);
    tempElement.style.width = this.elementWidth*10 + 'px';
    tempElement.style.height = this.elementHeight*10 + 'px';
    tempElement.style.marginTop = '10px';
    tempElement.style.border = '1px solid black';
    switch (this.elementType) {
        case "PC":
            tempElement.style.background = "url('assets/img/current-utilization-icons/win_free.svg')";
            break;
        case "Laptop":
            tempElement.style.background = "url('assets/img/current-utilization-icons/laptop.png')";
            break;
        case "Printer":
            tempElement.style.background = "url('assets/img/current-utilization-icons/printer.svg')";
            break;
        case "Wall":
            tempElement.style.background = 'black';
            break;
        default:
    }
    tempElement.style.backgroundSize = 'contain';
   }

   save() {
     for (let i=0; i < this.addedElement.length; i++) {
       var type = '';
       switch (this.addedElement[i].style.background) {
           case 'url("assets/img/current-utilization-icons/win_free.svg") 0% 0% / contain':
               type = 'PC';
               break;
           case 'url("assets/img/current-utilization-icons/laptop.svg") 0% 0% / contain':
               type = 'Laptop';
               break;
           case 'url("assets/img/current-utilization-icons/printer.svg") 0% 0% / contain':
               type = 'Printer';
               break;
           case '0% 0% / contain black':
               type = 'Wall';
               break;
           default:
       }
       console.log(this.addedElement[i].style.top + ', ' + this.addedElement[i].style.left + ', ' + this.addedElement[i].style.width + ', ' + this.addedElement[i].style.height + ', ' + type);
     }
   }

   // A helper method to check if 2 element are overlapped each other
   overlapped(element1: Element, element2: Element) {
     var rect1 = element1.getBoundingClientRect();
     var rect2 = element2.getBoundingClientRect();
     return !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom)
   }



}

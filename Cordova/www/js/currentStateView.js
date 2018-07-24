//display curent state text
function paragraphs(data) {
    this.console.log(data);

    //ids of the three paragraphs
    var currPercentId= "currPercent";
    var currLaptopId = "currLaptop";
    var currPCId = "currPC";

    var currPercent = this.document.createElement("p");
    currPercent.id = currPercentId;
    currPercent.className = "para";
    //currPercent.style.top = unit * (vertCount + 100) + "px";
    currPercent.innerHTML = "Aktuelle Auslastung: " + data.percentageOccupied + "%";

    var currLaptop = this.document.createElement("p");
    currLaptop.id = currLaptopId;
    currLaptop.className = "para";
    //currLaptop.style.top = unit * (vertCount) + "px";
    currLaptop.innerHTML = "Belegte Laptop-Plätze: ";

    var currPC = this.document.createElement("p");
    currPC.id = currPCId;
    currPC.className = "para";
    //currPC.style.top = unit * (vertCount) + "px";
    currPC.innerHTML = "Belegte Rechner: " + data.occupied;

    var container = this.document.getElementById("statusContainer");
    var body = this.document.getElementsByTagName("BODY")[0];
    container.appendChild(currPercent);
    container.appendChild(currLaptop);
    container.appendChild(currPC);
}
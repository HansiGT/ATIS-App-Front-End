//display curent state text
function paragraphs(data) {
    console.log(data);
    var para1 = document.createElement("p");
    para1.id = "para1";
    para1.style.top = unit * 142 + "px";
    para1.className = "para";
    para1.innerHTML = "Aktuelle Auslastung aaaa: " + data.percentageOccupied + "%";


    var para2 = document.createElement("p");
    para2.id = "para2";
    para2.className = "para";
    para2.style.top = unit * 142 + "px";
    para2.innerHTML = "Belegte Laptop-Plätze: ";


    var para3 = document.createElement("p");
    para3.id = "para3";
    para3.className = "para";
    para3.style.top = unit * 142 + "px";
    para3.innerHTML = "Belegte Rechner: " + data.occupied;

    var container = document.getElementById("statusContainer");
    var body = document.getElementsByTagName("BODY")[0];
    container.appendChild(para1);
    container.appendChild(para2);
    container.appendChild(para3);
}

var para1 = document.createElement("p");
para1.id = "para1";
para1.style.top = unit*142 + "px";
para1.className = "para";
var node1 = document.createTextNode("Aktuelle Auslastung: ");
para1.appendChild(node1);

var para2 = document.createElement("p");
para2.className = "para";
para2.style.top = unit*142 + "px";
var node2 = document.createTextNode("Belegte Laptop-Plätze: ");
para2.appendChild(node2);

var para3 = document.createElement("p");
para3.className = "para";
para3.style.top = unit*142 + "px";
var node3 = document.createTextNode("Belegte Rechner: ");
para3.appendChild(node3);

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(para1);
body.appendChild(para2);
body.appendChild(para3);

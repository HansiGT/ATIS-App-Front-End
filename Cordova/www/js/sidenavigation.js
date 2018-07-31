function Sidenav(){
    var menu = document.getElementById("menuNavigation");
    var mySidenav = document.createElement("DIV");
    mySidenav.id = "mySidenav";
    mySidenav.className = "sidenav";
    menu.insertBefore(mySidenav, menu.childNodes[0]);
    var link1 = document.createElement('a');
    link1.innerHTML = "&times;";
    link1.href = "#";
    link1.className = "closebtn";
    mySidenav.appendChild(link1);
    link1.addEventListener("click", function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    })
    var link2 = document.createElement('a');
    link2.innerHTML = "Startseite";
    link2.href = "index.html";
    var link3 = document.createElement('a');
    link3.innerHTML = "Vorhersage";
    link3.href = "prediction.html";
    var link4 = document.createElement('a');
    link4.innerHTML = "Reservierung";
    link4.href = "reservation.html";
    var link5 = document.createElement('a');
    link5.innerHTML = "Öffnungszeiten";
    link5.href = "openingHours.html";
    var link6 = document.createElement('a');
    link6.innerHTML = "Statistiken";
    link6.href = "statistics.html";
    mySidenav.appendChild(link1);
    mySidenav.appendChild(link2);
    mySidenav.appendChild(link3);
    mySidenav.appendChild(link4);
    mySidenav.appendChild(link5);
    mySidenav.appendChild(link6);
    var open = document.createElement("SPAN");
    open.style = "font-size:30px;cursor:pointer";
    open.addEventListener("click", function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    })
    open.innerHTML = "&#9776; Menü";
    menu.insertBefore(open, menu.childNodes[0]);
}

Sidenav();
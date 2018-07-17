var currentStateData;

var request = new XMLHttpRequest();
request.open('GET', 'https://workspace.cm.tm.kit.edu/layout', true);
var request2 = new XMLHttpRequest();
request2.open('GET', 'https://utilization.cm.tm.kit.edu/currentState', true);
var request3 = new XMLHttpRequest();
request3.open('GET', 'https://utilization.cm.tm.kit.edu/currentUtilization', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        iterateRooms(data);
        iteratePoolElements(data);
        request2.onload = function() {
            data = JSON.parse(this.response);
            currentStateData = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                iterateCurrentStates(data);
                request3.onload = function() {
                    data = JSON.parse(this.response);
                    if (request.status >= 200 && request.status < 400) {
                        paragraphs(data);
                    } else {
                        console.log('error');
                    }
                }
                request3.send();
            } else {
                console.log('error');
            }
        }
        request2.send();
    } else {
        console.log('error');
    }
}
request.send();

var change = true;

// Update the current state of computers
function updateCurrentState() {
    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://utilization.cm.tm.kit.edu/currentState', true);
    request2.onload = function() {
        newCurrentStateData = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            for (var i = 0; i < newCurrentStateData.length; i++) {
              if (newCurrentStateData.data[i].state != currentStateData.data[i].state){
                updateCurrentStateOfElement(newCurrentStateData.data[i]);
                console.log("Update");
              }
            }
        }
        currentStateData = newCurrentStateData;
    }
    request2.send();
}



// Update the percentage occupied
function updateCurrentUtilization() {
  if (change) {
    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://utilization.cm.tm.kit.edu/currentUtilization', true);
    request2.onload = function() {
        data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
          document.getElementById("para1").innerHTML = "Aktuelle Auslastung: " + data.percentageOccupied + "%";
          document.getElementById("para2").innerHTML = "Belegte Laptop-Plätze: ";
          document.getElementById("para3").innerHTML = "Belegte Rechner: " + data.occupied;
        }
    }
    request2.send();
  }
}

// Update the current state every 5 seconds
setInterval(updateCurrentState, 5000);
// Update the current percentage occupied every 5 seconds
setInterval(updateCurrentUtilization, 5000);

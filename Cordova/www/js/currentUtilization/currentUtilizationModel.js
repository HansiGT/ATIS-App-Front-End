var currentStateData;

var requestLayout = new XMLHttpRequest();
requestLayout.open('GET', 'https://workspace.cm.tm.kit.edu/layout', true);
var requestCurrentState = new XMLHttpRequest();
requestCurrentState.open('GET', 'https://utilization.cm.tm.kit.edu/currentState', true);
var requestCurrentUtil = new XMLHttpRequest();
requestCurrentUtil.open('GET', 'https://utilization.cm.tm.kit.edu/currentUtilization', true);
requestLayout.onload = function () {
    var data = JSON.parse(this.response);
    if (requestLayout.status >= 200 && requestLayout.status < 400) {
        iterateRooms(data);
        iteratePoolElements(data);

        requestCurrentState.onload = function () {
            data = JSON.parse(this.response);
            currentStateData = JSON.parse(this.response);            
            if (requestLayout.status >= 200 && requestLayout.status < 400) {
                iterateCurrentStates(data);

                requestCurrentUtil.onload = function () {
                    data = JSON.parse(this.response);
                    if (requestLayout.status >= 200 && requestLayout.status < 400) {
                        paragraphs(data);
                    } else {
                        console.log('error');
                    }
                }
                requestCurrentUtil.send();
            } else {
                console.log('error');
            }
        }
        requestCurrentState.send();
    } else {
        console.log('error');
    }
}
requestLayout.send();

var change = true;

// Update the current state of computers
function updateCurrentState() {
    var requestCurrentState = new XMLHttpRequest();
    requestCurrentState.open('GET', 'https://utilization.cm.tm.kit.edu/currentState', true);
    requestCurrentState.onload = function () {
        newCurrentStateData = JSON.parse(this.response);
        if (requestLayout.status >= 200 && requestLayout.status < 400) {
            for (var i = 0; i < newCurrentStateData.length; i++) {
                if (newCurrentStateData.data[i].state != currentStateData.data[i].state) {
                    updateCurrentStateOfElement(newCurrentStateData.data[i]);
                    console.log("Update");
                }
            }
        }
        currentStateData = newCurrentStateData;
    }
    requestCurrentState.send();
}


// Update the percentage occupied
function updateCurrentUtilization() {
    if (change) {
        var requestCurrentUtil = new XMLHttpRequest();
        requestCurrentUtil.open('GET', 'https://utilization.cm.tm.kit.edu/currentUtilization', true);
        requestCurrentUtil.onload = function () {
            data = JSON.parse(this.response);
            if (requestLayout.status >= 200 && requestLayout.status < 400) {
                //set values of the current state
                document.getElementById(currPercentId).innerHTML = "Aktuelle Auslastung: " + data.percentageOccupied + "%";
                document.getElementById(currLaptopId).innerHTML = "Belegte Laptop-Plätze: ";
                document.getElementById(currPCId).innerHTML = "Belegte Rechner: " + data.occupied;
            }
        }
        requestCurrentUtil.send();
    }
}

var updateInterval = 30000;
// Update the current state every 30 seconds
setInterval(updateCurrentState, updateInterval);
// Update the current percentage occupied every 30 seconds
setInterval(updateCurrentUtilization, updateInterval);

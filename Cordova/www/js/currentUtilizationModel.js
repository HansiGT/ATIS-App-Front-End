var request = new XMLHttpRequest();
request.open('GET', 'https://pool.cm.tm.kit.edu/layout', true);
var request2 = new XMLHttpRequest();
request2.open('GET', 'https://pool.cm.tm.kit.edu/currentState', true);
var request3 = new XMLHttpRequest();
request3.open('GET', 'https://pool.cm.tm.kit.edu/currentUtilization', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        iterateRooms(data);
        iteratePoolElements(data);
        request2.onload = function() {
            data = JSON.parse(this.response);
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

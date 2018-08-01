var openingHoursData;

var requestOpeningHours = new XMLHttpRequest();
requestOpeningHours.open('GET', 'https://workspace.cm.tm.kit.edu/opening-hours', true);

requestOpeningHours.onload = function() {

    openingHoursData = JSON.parse(this.response);

    if (requestOpeningHours.status >= 200 && requestOpeningHours.status < 400) {
        createPageContent(openingHoursData);
    } else {
        this.console.log('could not get opening hours data');
    }
}
requestOpeningHours.send();
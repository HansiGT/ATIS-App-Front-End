//{"dayOfWeek":"MONDAY","startTime":"07:00","endTime":"21:00"}

function createPageContent(openingHoursData) {
    
    var paragraph = this.document.createElement('p');
    paragraph.innerHTML = "Die ATIS hat an folgenden Tagen geöffnet:"
    this.document.getElementById("openingHours").appendChild(paragraph);
    
    //create table with opening hours
    createTable(openingHoursData);
}

function createTable(openingHoursData) {

    var data = this.openingHoursData.openingHours
    //create table
    var table = this.document.createElement('table');

    for (var ii = 0; ii < data.length; ii++) {
        //create row
        var tableRow = this.document.createElement('tr');
        //create entries
        var dayEntry = this.document.createElement('td');
        var startEntry = this.document.createElement('td');
        var endEntry = this.document.createElement('td');
        //add text to entries
        dayEntry.innerHTML = getDayString(data[ii].dayOfWeek);
        startEntry.innerHTML = " : von " + data[ii].startTime;
        endEntry.innerHTML = " - " + data[ii].endTime;
        //append entries
        tableRow.appendChild(dayEntry);
        tableRow.appendChild(startEntry);
        tableRow.appendChild(endEntry);
        //append row
        table.appendChild(tableRow);
    }
    //append table to div on page
    this.document.getElementById("openingHours").appendChild(table);
}

function getDayString(day) {
    //get the german weekday from the english word
    switch(day) {
        case "MONDAY": 
            return "Montag";
        case "TUESDAY": 
            return "Dienstag";
        case "WEDNESDAY": 
            return "Mittwoch"; 
        case "THURSDAY": 
            return "Donnerstag";
        case "FRIDAY": 
            return "Freitag"; 
        case "SATURDAY": 
            return "Samstag"; 
        default: 
            this.console.log("incorrect dayString"); 
            return "error";
    } 
}
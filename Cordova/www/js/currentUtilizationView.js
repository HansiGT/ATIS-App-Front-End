//create grid for layout (why 162?????????????????????)
//var unit = screen.width / 162;

var unit = 0;

//amount of units in either direction
var vertCount = 100;
var horCount = 142;

//size of a unit
var vertUnit  = window.innerHeight / vertCount;
var horUnit  = window.innerWidth / horCount;
//if the resulting grid is too big for the screen the other unit szie will be used
if (vertUnit * horCount < window.innerWidth) {
    unit = vertUnit
} else if (horUnit * vertCount <= window.innerHeight) {
    unit = horUnit
} else {
    console.log("screen size doesn't allow for propper fit")
}

//why 159 why 108?????????????
for (var i = 0; i < vertCount; i++) {
    for (var j = 0; j < horCount; j++) {

        var board = document.createElement('div');
        board.className = "square";
        board.id = "" + j + ", " + i;
        //position of the square
        board.style.left = unit * j + "px";
        board.style.top = unit * i + "px";

        board.style.border = "white";
        document.getElementById("container").appendChild(board);
    }
}

//Put the rooms on layout
function iterateRooms(data) {
    data.rooms.forEach(function (room) {

        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.beginPath();

        //draw outline of room (not hard coded)
        for(var i = 0; i < room.length - 1; i++) {
            context.moveTo(unit * room.pos[i].x, unit * room.pos[i].y);
            context.lineTo(unit * room.pos[i + 1].x, unit * room.pos[i + 1].y); 
        }

        /*
        //draw rooms, hard coded (why?)
        context.moveTo(unit * room.pos[0].x, unit * room.pos[0].y);
        context.lineTo(unit * room.pos[1].x, unit * room.pos[1].y);

        context.moveTo(unit * room.pos[1].x, unit * room.pos[1].y);
        context.lineTo(unit * room.pos[2].x, unit * room.pos[2].y);

        context.moveTo(unit * room.pos[2].x, unit * room.pos[2].y);
        context.lineTo(unit * room.pos[3].x, unit * room.pos[3].y);

        context.moveTo(unit * room.pos[3].x, unit * room.pos[3].y);
        context.lineTo(unit * room.pos[0].x, unit * room.pos[0].y);
        */

        context.closePath();
        context.stroke();

        // var roomDiv = document.createElement('div');
        // roomDiv.className = "square";
        // roomDiv.id = "room" + room.id;
        // roomDiv.style.left = unit*room.pos[0].x + "px";
        // roomDiv.style.top = unit*room.pos[0].y + "px";
        // roomDiv.style.width = unit*(room.pos[1].x - room.pos[0].x) + "px";
        // roomDiv.style.height = unit*(room.pos[3].y - room.pos[0].y) + "px";
        // document.getElementById("container").appendChild(roomDiv);

        /*var doorDiv = document.createElement('div');
        doorDiv.className = "square";
        doorDiv.id = "door" + room.id;
        doorDiv.style.left = unit*room.door.posX + "px";
        doorDiv.style.top = unit*(room.door.posY - room.door.length)  + "px";
        doorDiv.style.width = unit*room.door.length + "px";
        doorDiv.style.height = unit*room.door.length + "px";
        doorDiv.style.backgroundImage =  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxXHiFbm8YWyyIqBfRfwXgo_ZJpSuc2eLQh4t9XuA6r_equ7H0g')";
        doorDiv.style.border = "white";
        document.getElementById("container").appendChild(doorDiv);*/
    })
    /*The ATIS-door is vertical => rotate 90 degrees
    document.getElementById("door0").style.transform = "rotate(90deg)";*/
}

function iteratePoolElements(data) {
    data.poolElements.forEach(function (poolElement) {
        //place pool elements
        var board = document.createElement('div');
        board.className = "square";
        //get the id
        board.id = poolElement.type + poolElement.id;
        //set the position
        board.style.left = unit * poolElement.pos.x + "px";
        board.style.top = unit * poolElement.pos.y + "px";
        //set size
        board.style.width = unit * poolElement.width + "px";
        board.style.height = unit * poolElement.length + "px";

        document.getElementById("container").appendChild(board);

        //Put icon of the pool element in the layout

        switch (poolElement.type) {
            case "PC":
                document.getElementById("" + board.id).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/win_free.png')";
                break;
            case "Laptop":
                document.getElementById("" + board.id).style.backgroundImage = "url('https://serving.photos.photobox.com/281944168551a46df5af4a102cc66386797df109483bb8ff961830b9d45e37e7f06cc8db.jpg')";
                break;
            case "printer":
                document.getElementById("" + board.id).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/kyocera.png')";
                break;
            case "wall":
                document.getElementById("" + board.id).style.backgroundColor = "black";
                break;
            default:
        }

        //Put id of the pool element in the layout
        var span = document.createElement('span');
        span.className = "span";
        span.innerHTML = "" + poolElement.id;
        document.getElementById("" + board.id).appendChild(span);

    });
}

function iterateCurrentStates(data) {
    const UNKNOWN_STATUS = 0;
    const LINUX_AVAILABLE = 1;
    const WINDOWS_AVAILABLE = 2;
    const LINUX_OCCUPIED = 3;
    const WINDOWS_OCCUPIED = 4;
    const LAPTOP_AVAILABLE = 5;
    const LAPTOP_OCCUPIED = 6;

    data.data.forEach(function (currentState) {
        updateCurrentStateOfElement(currentState);
    })

    function updateCurrentStateOfElement(element) {
        var stateIconURL;
        switch (element.state) {
            case UNKNOWN_STATUS:
                stateIconURL = "img/state_unknown.png";
                break;
            case WINDOWS_AVAILABLE:
                stateIconURL = "img/win_free.png";
                break;
            case WINDOWS_OCCUPIED:
                stateIconURL = "img/win_busy.png";
                break;
            case LINUX_AVAILABLE:
                stateIconURL = "img/linux_free2.png";
                break;
            case LINUX_OCCUPIED:
                stateIconURL = "img/linux_busy2.png";
                break;
            case LAPTOP_AVAILABLE:
                stateIconURL = "https://serving.photos.photobox.com/68520215cd406f9aec5c4341a0a87b49930e590450b90c2bce0840d7fb9539190d35da20.jpg";
                break;
            case LAPTOP_OCCUPIED:
                stateIconURL = "https://serving.photos.photobox.com/394002731fca1441d9191729fce1de2de9c814f4fee1c075869535db1ab91d7cb46f70aa.jpg";
                break;
            default:
                console.log("could not set image of element: " + element.id);
        }
        var temp = document.getElementById("" + element.type + element.id);
        temp.className = "square";
        temp.style.backgroundImage = "url('" + stateIconURL + "')";
    }


}

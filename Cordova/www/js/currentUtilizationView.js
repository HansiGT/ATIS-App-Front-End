
//create grid for layout (why 162?????????????????????)
//var unit = screen.width / 162;

var unit = 0;

//amount of units in either direction
var vertCount = 100;
var horCount = 162;

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


//Put the rooms on layout
function iterateRooms(data) {
    data.rooms.forEach(function (room) {

        var canvas = document.getElementById('roomCanvas');
        var context = canvas.getContext('2d');
        context.beginPath();


        //draw outline of room (not hard coded)
        for(var i = 0; i < room.pos.length - 1; i++) {
            context.moveTo(unit * room.pos[i].x, unit * room.pos[i].y);
            context.lineTo(unit * room.pos[i + 1].x, unit * room.pos[i + 1].y);
        }
        //connect to the first
        context.moveTo(unit * room.pos[room.pos.length - 1].x, unit * room.pos[room.pos.length - 1].y);
        context.lineTo(unit * room.pos[0].x, unit * room.pos[0].y);


        //draw rooms, hard coded (why?)
        /*
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

        room.portalGates.forEach(function(portalGate) {
		if (portalGate.type == "door") {
			var canvas = document.getElementById('doorCanvas');
	    var doorContext = canvas.getContext('2d');
			doorContext.beginPath();
			doorContext.moveTo(unit*portalGate.pos[0].x, unit*portalGate.pos[0].y - 2*unit);
			doorContext.lineTo(unit*portalGate.pos[1].x, unit*portalGate.pos[1].y - 2*unit);
			doorContext.lineWidth = unit*3;
			doorContext.strokeStyle="#1e90ff";
			doorContext.closePath();
	    doorContext.stroke();
        }
        })
    })
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

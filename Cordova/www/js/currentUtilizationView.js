var unit = screen.width/162;
for (var i = 0; i < 108; i++) {
	for (var j = 0; j < 159; j++) {
		var board = document.createElement('div');
        board.className = "square";
		board.id = ""+ j + ", " + i ;
		board.style.left = unit*j + "px";
		board.style.top = unit*(i+32) + "px";
		board.style.border = "white";
        document.getElementById("container").appendChild(board);
	}
}

function paragraphs(data) {
console.log(data);
var para1 = document.createElement("p");
para1.id = "para1";
para1.style.top = unit*142 + "px";
para1.className = "para";
var node1 = document.createTextNode("Aktuelle Auslastung: " + data.percentageOccupied + "%");
para1.appendChild(node1);

var para2 = document.createElement("p");
para2.className = "para";
para2.style.top = unit*142 + "px";
var node2 = document.createTextNode("Belegte Laptop-Plätze: ");
para2.appendChild(node2);

var para3 = document.createElement("p");
para3.className = "para";
para3.style.top = unit*142 + "px";
var node3 = document.createTextNode("Belegte Rechner: " + data.occupied);
para3.appendChild(node3);

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(para1);
body.appendChild(para2);
body.appendChild(para3);
}

//Put the rooms on layout
function iterateRooms(data) {
data.rooms.forEach(function(room) {
	var roomDiv = document.createElement('div');
	roomDiv.className = "square";
	roomDiv.id = "room" + room.id;
	roomDiv.style.left = unit*room.pos[0].x + "px";
	roomDiv.style.top = unit*room.pos[0].y + "px";
	roomDiv.style.width = unit*(room.pos[1].x - room.pos[0].x) + "px";
	roomDiv.style.height = unit*(room.pos[3].y - room.pos[0].y) + "px";
	document.getElementById("container").appendChild(roomDiv);

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
    data.poolElements.forEach(function(poolElement) {

	var board = document.createElement('div');
	board.className = "square";
	board.id	= poolElement.type + poolElement.id ;
	board.style.left = unit*poolElement.pos.x + "px";
	board.style.top = unit*(poolElement.pos.y + 32) + "px";
	board.style.width = unit*poolElement.width + "px";
	board.style.height = unit*poolElement.length + "px";
    document.getElementById("container").appendChild(board);

	//Put icon of the pool element in the layout

	switch (poolElement.type) {
		case "PC":
			document.getElementById("" + board.id ).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/win_free.png')";
			break;
		case "Laptop":
			document.getElementById("" + board.id ).style.backgroundImage = "url('https://serving.photos.photobox.com/68520215cd406f9aec5c4341a0a87b49930e590450b90c2bce0840d7fb9539190d35da20.jpg')";
			break;
		case "printer":
				document.getElementById("" + board.id ).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/kyocera.png')";
				break;
		case "wall":
				document.getElementById("" + board.id ).style.backgroundColor = "black";
				break;
		default:
	}

	//Put id of the pool element in the layout
	var span = document.createElement('span');
	span.className ="span";
	span.innerHTML = "" + poolElement.id;
	document.getElementById("" + board.id).appendChild(span);

});
}

function iterateCurrentStates(data) {
const WINDOWS_AVAILABLE = 1;
const WINDOWS_OCCUPIED = 2;
const LINUX_AVAILABLE = 3;
const LINUX_OCCUPIED = 4;
const LAPTOP_AVAILABLE = 5;
const LAPTOP_OCCUPIED = 6;
    
data.data.forEach(function(currentState) {
  var stateIconURL;
  switch (currentState.state) {
    case WINDOWS_AVAILABLE:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/win_free.png";
      break;
    case WINDOWS_OCCUPIED:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/win_busy.png";
      break;
    case LINUX_AVAILABLE:
      stateIconURL = "img/linux_free2.png";
      break;
    case LINUX_OCCUPIED:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/linux_busy2.png";
      break;
    case LAPTOP_AVAILABLE:
      stateIconURL = "https://serving.photos.photobox.com/68520215cd406f9aec5c4341a0a87b49930e590450b90c2bce0840d7fb9539190d35da20.jpg";
      break;
    case LAPTOP_OCCUPIED:
      stateIconURL = "https://serving.photos.photobox.com/394002731fca1441d9191729fce1de2de9c814f4fee1c075869535db1ab91d7cb46f70aa.jpg";
      break;
    default:
  }
	var temp = document.getElementById("" + currentState.type + currentState.id);
	temp.className = "square";
    temp.style.backgroundImage = "url('" + stateIconURL +"')";
})
}
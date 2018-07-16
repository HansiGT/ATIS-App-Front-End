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

//Put the rooms on layout
rooms.forEach(function(room) {
	var roomDiv = document.createElement('div');
	roomDiv.className = "square";
	roomDiv.id = "room" + room.id;
	roomDiv.style.left = unit*room.posX1 + "px";
	roomDiv.style.top = unit*room.posY1 + "px";
	roomDiv.style.width = unit*(room.posX2 - room.posX1) + "px";
	roomDiv.style.height = unit*(room.posY4 - room.posY1) + "px";
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

//Put the pool's elements on layout
poolElements.forEach(function(poolElement) {
	var board = document.createElement('div');
	board.className = "square";
	board.id	= poolElement.type + poolElement.id ;
	board.style.left = unit*poolElement.posX + "px";
	board.style.top = unit*(poolElement.posY + 32) + "px";
	board.style.width = unit*poolElement.width + "px";
	board.style.height = unit*poolElement.height + "px";
  document.getElementById("container").appendChild(board);

	//Put icon of the pool element in the layout
	switch (poolElement.type) {
		case "PC":
			document.getElementById("" + board.id ).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/win_free.png')";
			break;
		case "Laptop":
			document.getElementById("" + board.id ).style.backgroundImage = "url('https://serving.photos.photobox.com/68520215cd406f9aec5c4341a0a87b49930e590450b90c2bce0840d7fb9539190d35da20.jpg";
			break;
		case "Printer":
				document.getElementById("" + board.id ).style.backgroundImage = "url('https://webadmin.informatik.kit.edu/pool/img/kyocera.png";
				break;
		case "Wall":
				document.getElementById("" + board.id ).style.backgroundColor = "black";
				break;
		default:
	}

	//Put id of the pool element
	var span = document.createElement('span');
	span.className ="span";
	span.innerHTML = "" + poolElement.id;
	document.getElementById("" + board.id).appendChild(span);
})

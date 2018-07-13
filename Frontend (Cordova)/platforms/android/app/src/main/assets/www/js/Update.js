var currentStates = [
	{
		id: "PC1",
		state: 2,
	},
	{
		id: "PC2",
		state: 4,
	},
	{
		id: "Laptop1",
		state: 5,
	},
]



const NUMBERS_OF_DESKS = 72;
const WINDOWS_AVAILABLE = 1;
const WINDOWS_OCCUPIED = 2;
const LINUX_AVAILABLE = 3;
const LINUX_OCCUPIED = 4;
const LAPTOP_AVAILABLE = 5;
const LAPTOP_OCCUPIED = 6;

currentStates.forEach(function(currentState) {
  var stateIconURL;
  switch (currentState.state) {
    case WINDOWS_AVAILABLE:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/win_free.png";
      break;
    case WINDOWS_OCCUPIED:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/win_busy.png";
      break;
    case LINUX_AVAILABLE:
      stateIconURL = "https://webadmin.informatik.kit.edu/pool/img/linux_free2.png";
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
  document.getElementById("" + currentState.id).style.backgroundImage = "url('" + stateIconURL +"')";
})
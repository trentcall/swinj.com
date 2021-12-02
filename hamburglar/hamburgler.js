var imageHolderDivElement = document.getElementById("imageHolder");

var pathList = [
	"00-ang_bc",
	"01-ang_dxz",
	"02-ang_mushsws",
	"03-bg_mc",
	"04-qu_pd",
	"12-dbl_qrt",
	//"05-sth_crsp_chick",
	"06-filt_fish",
	"07-hamb",
	"08-mcdbl",
	"09-mchick",
	"10-pre_crsp_chk_clb",
	"11-mcrb",
];

var actionToRestore = function(event){
	var image = event.target;
	image.src = image.stateNormal;
};

var actionToDoWhenClicking = function(event){
	var image = event.target;
	image.src = image.stateClick;
};

var actionToDoWhenMousingOver = function(event){
	var image = event.target;
	image.src = image.stateOver;
};

var actionToDoInThePathForEach = function(path){
	var imageElement = new Image();
	
	imageElement.stateNormal = "images/" + path + ".jpg";
	imageElement.stateOver =   "images/" + path + "_over.jpg";
	imageElement.stateClick =  "images/" + path + ".gif";

	imageElement.src = imageElement.stateNormal;

	imageElement.addEventListener('mousedown', actionToDoWhenClicking);
	imageElement.addEventListener('mouseup', actionToRestore);

	imageElement.addEventListener('mouseover', actionToDoWhenMousingOver);
	imageElement.addEventListener('mouseout', actionToRestore);

	imageHolderDivElement.appendChild(imageElement);
};

pathList.forEach(actionToDoInThePathForEach);




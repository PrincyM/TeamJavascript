$(document).ready(function(){
	loadOptions();
});

var gameInstance;

function loadOptions(){
	//$("#game").append($("<input type=\"button\" value=\"easy\"></input>").click(loadTicTacToe).width("100px"));
	$("#game").empty();
	$("#game").append("<div id=\"menu\"></div>");
	$("#menu").append($("<input id=\"btn_hard\" type=\"button\" value=\"easy\"></input>").click(easyTicTacToe).width("100px"));
	$("#btn_hard").css("display","block");
	$("#menu").append($("<input id=\"btn_easy\" type=\"button\" value=\"hard\"></input>").click(hardTicTacToe).width("100px"));

}

function hardTicTacToe(){
	loadTicTacToe(1);
}
function easyTicTacToe(){
	loadTicTacToe(0);
}


function loadTicTacToe(hard){
	$("#menu").remove();
	gameInstance = new Tictactoe(hard);
	gameInstance.load(0);
}

function userPlay(){
	gameInstance.userplay($(this).attr("id"));
}
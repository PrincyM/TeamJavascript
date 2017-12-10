//alert("hola");
// ###########################################
// ######## CODE FOR EXTERNAL WEB ############
// ###########################################
// function onLoadProcess(){
// 	alert("hola");
// 	$("#siteloader").html('<object id="new-page" data="http://emol.com/"></object>');
// 	$("#new-page").css("width","1080px")
// 	$("#new-page").css("height","1600");
// }
// window.onload = onLoadProcess;


//we define this herarchy for the page. if it changes, we just have to change this 2 arrays
var mainSections = ["Products/Services","Location","Site Map","Constest","About Us"];
var secSections = [["Menu", "Specials", "Gift Cards","Events/Booking"],[]
	,[] ,[] ,["Contact Us", "Carreers"]];
var mainSectionsLinks = ["Products/Services","Location","Site Map","Constest","About Us"];
var secSectionsLinks = [["Menu", "Specials", "Gift Cards","Events/Booking"],[]
	,[] ,[] ,["Contact Us", "Carreers"]];

var canvas;
window.onload = function(){
	$("#header").load("header.html");
	canvas = document.getElementById("map-layout");
	canvas.width = 800;
	canvas.height = 500;
	drawLayout();
}


function drawLayout(){

	var canvasWidth = canvas.width;
	var boxWidth = 120;
	var canvasHeight = canvas.height;
	var boxHeigth = 40;
	var margin = 30;

//First we draw the home. only 1 block in that row.
	draw((canvasWidth-boxWidth)/2,margin,boxWidth,boxHeigth,"Home");


//now we define some properties of the main sections
//
	var hmargin = (canvasWidth-boxWidth*mainSections.length)/
		(mainSections.length+1);

//now we draw de main sections
	for(var i = 0; i< mainSections.length; i++)
	{
		draw(i*(hmargin)-boxWidth+hmargin,margin*2+boxHeigth,
			boxWidth,boxHeigth,mainSections[i]);
	}

//finaly we do the same thing for the secondary sections
	for(var i = 0; i < mainSections.length;i++)
	{
		for(var j = 0; j < secSections[i].length;j++)
		{
			draw(i*(hmargin)-boxWidth*j+hmargin+10,
				margin*(3 + j)+boxHeigth*(j+1)/2,
				boxWidth,boxHeigth,secSections[i][j]);
		}
	}
}

function draw(x,y,a,b,text){
//We draw the rectangle with the data given	
	// var ctx = canvas.getContext("2d");
	// console.log(a);
	// console.log(canvas.width);
	// ctx.rect(x,y,a,b);
	// ctx.fillStyle="#555";
	// ctx.fill();
	// ctx.font = "16px Arial";
	// ctx.fillStyle="#FFF";
	// ctx.fillText(text,10,50);
	var newBox = document.createElement("div");
	newBox.style.background = "#777";
	newBox.style.width = a + "px";
	newBox.style.height = b + "px";
	newBox.style.position = "relative";
	newBox.style.top = y+"px";
	newBox.style.left = Math.floor(x)+"px";
	newBox.style.display = "inline-block";
	newBox.style.color = "white";
	newBox.innerHTML = text;
	newBox.style.textAlign = "center";
	newBox.style.verticalAlign = "middle";
	newBox.style.lineHeight = b + "px";
	canvas.appendChild(newBox);
}
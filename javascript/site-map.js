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
	// $("#header").load("header.html");
	//var link = document.querySelector('link[rel="import"]');
	//body.appendChild(link.import); 
	canvas = document.getElementById("map-layout");
	canvas.width = 800;
	canvas.height = 500;
	drawLayout();
}



//////////////////////////////////////////////////////////////////
// function that draws the site map with the given arrays.
//////////////////////////////////////////////////////////////////

function drawLayout(){

	var canvasWidth = canvas.width;
	var boxWidth = 120;
	var canvasHeight = canvas.height;
	var boxHeigth = 40;
	var margin = 30;

//First we draw the home. only 1 block in that row.
	draw((canvasWidth-boxWidth)/2,margin,boxWidth,boxHeigth,"Home","home.html");


//now we define some properties of the main sections
//
	var hmargin = (canvasWidth-boxWidth*mainSections.length)/
		(mainSections.length+1);

//now we draw de main sections
	for(var i = 0; i< mainSections.length; i++)
	{
		draw(i*(hmargin)-boxWidth+hmargin,margin*2+boxHeigth,
			boxWidth,boxHeigth,mainSections[i],mainSectionsLinks[i][j]);
	}

//finaly we do the same thing for the secondary sections
	for(var i = 0; i < mainSections.length;i++)
	{
		for(var j = 0; j < secSections[i].length;j++)
		{
			draw(i*(hmargin)-boxWidth*j+hmargin+10,
				margin*(3 + j)+boxHeigth*(j+1)/2,
				boxWidth,boxHeigth,secSections[i][j],secSectionsLinks[i][j]);
		}
	}
}

//////////////////////////////////////////////////////////////////
// function that draws a div with the given coordinates, size and text inside.
//////////////////////////////////////////////////////////////////
function draw(x,y,a,b,text,link){
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
	newBox.addEventListener("mouseover", function(){onSiteDivMouseOver(link)});
//	newBox.addEventListener("mouseout", onSiteDivMouseOut(link));
	canvas.appendChild(newBox);
}

function onSiteDivMouseOver (link){
	var scale = 0.4
    document.getElementById("preview").innerHTML = "";
	var ifrm = document.createElement("iframe");
    ifrm.style.webkitTransform = "Scale("+ scale +")";
    ifrm.style.transformOrigin = "0 0";
	ifrm.id = "ifrm-site";
	//the next line, we have to change the secon argument for the actual link received. 
	ifrm.setAttribute("src", 	"http://www.emol.com");
	document.getElementById("preview").appendChild(ifrm);
	ifrm.style.width = ( 1 / scale * 100) + "%";
    ifrm.style.height = ( 1 / scale * 100) + "%";
    ifrm.style.margin = "0 auto";

	console.log(ifrm.children);



	// var prev = document.createElement("object");
	// prev.id = "new-page"
	// prev.style.width = "300px";
	// prev.style.height = "400px";
	// prev.data = "site-map.html";
	// prev.style.margin = "0 auto";
	// prev.style.display = "block";
	// document.getElementById("preview").innerHTML = "";// '<object id="new-page" data="contest.html"></object>';
	// document.getElementById("preview").appendChild(prev);
	// var newpage = document.getElementById("preview").children[0];
	// console.log(newpage);
	//$("#siteloader").html('<object id="new-page" data="http://emol.com/"></object>');
	//$("#new-page").css("width","1080px")
	//$("#new-page").css("height","1600");	
}
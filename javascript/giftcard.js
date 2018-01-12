// stars hidden

$(document).ready(function(){  

//hide the stars

	$("#copper_star").hide();
	$("#green_star").hide();     
	$("#red_star").hide();

//functions to take user input

	$("#fname").on('input',onFnameChange);
	$("#to_giftee").on('input',onToNameChange);
	



// functions change background color

	$("#btn_bg_grey").click(function(){$("#giftcard").css
	("background-color", "#bcbaba"); } ); 

	$("#btn_bg_green").click(function(){$("#giftcard").css
	("background-color", "#cccc98"); } );

	$("#btn_bg_red").click(function(){$("#giftcard").css
	("background-color", "#ac2430"); } );

//  functions to change star 

	$("#star_copper").click(function(){
		$("#original_logo").hide();
		$("#copper_star").show();
	});


})//end of ready of line 1

function onFnameChange(){
	var a = $("#fname").val();
	$("#from_name").html(a);
}

function onToNameChange(){
	var a = $("#to_giftee").val();
	$("#to_name").html(a);
}
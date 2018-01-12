// stars hidden

$(document).ready(function(){  

//hide the stars

	$("#copper_star").hide();
	$("#green_star").hide();     
	$("#red_star").hide();

//hide the marx

	$("#olive_marx").hide();
	$("#periwinkle_marx").hide();     
	$("#purple_marx").hide();


//functions to take user input from form

	$("#fname").on('input',onFnameChange);
	$("#to_giftee").on('input',onToNameChange);
	$("#input_amount").on('input',onAmountChange);
	$("#messagetxtbox").on('input',onMessageChange);
	

function onFnameChange(){
	var a = $("#fname").val();
	$("#from_name").html(a);
}

function onToNameChange(){
	var a = $("#to_giftee").val();
	$("#to_name").html(a);
}
function onAmountChange(){
	var a = $("#input_amount").val();
	$("gift_amount").text("$");
	$("#gift_amount").html(a);
}
function onMessageChange(){
	var a = $("#messagetxtbox").val();
	$("#gift_message").html(a);
}


// functions to change background color

	$("#btn_bg_grey").click(function(){$("#giftcard").css
	("background-color", "#bcbaba"); } ); 

	$("#btn_bg_green").click(function(){$("#giftcard").css
	("background-color", "#cccc98"); } );

	$("#btn_bg_red").click(function(){$("#giftcard").css
	("background-color", "#ac2430"); } );

//  functions to change star 

	$("#star_copper").click(function(){
		$("#original_logo").hide();
		$("#green_star").hide();
		$("#red_star").hide();
		$("#copper_star").show();
	});

	$("#star_green").click(function(){
		$("#original_logo").hide();
		$("#copper_star").hide();
		$("#red_star").hide();
		$("#green_star").show();
	});

	$("#star_red").click(function(){
		$("#original_logo").hide();
		$("#green_star").hide();
		$("#copper_star").hide();
		$("#red_star").show();
	});

//functions to change marx

	$("#btn_olive_marx").click(function(){
		$("#original_logo").hide();
		$("#purple_marx").hide();
		$("#periwinkle_marx").hide();
		$("#olive_marx").show();
	});

	$("#btn_purple_marx").click(function(){
		$("#original_logo").hide();
		$("#olive_marx").hide();
		$("#periwinkle_marx").hide();
		$("#purple_marx").show();
	});

	$("#btn_periwinle_marx").click(function(){
		$("#original_logo").hide();
		$("#olive_marx").hide();
		$("#purple_marx").hide();
		$("#periwinkle_marx").show();
	});




})//end of ready function starting at line 1


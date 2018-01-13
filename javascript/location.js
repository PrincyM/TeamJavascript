$(document).ready(function(){


//variables to hold user input
	
	$("#form").submit(function(){return false;});
	
});

   //  var varFieldCity = $('#field_city').val();
  	// var varfield_address = $('#field_address').val();
  	// var varfield_PC = $('#field_PC').val();

console.log(varFieldCity);
function enter(){
	var varFieldCity = $('#field_city').val();
  	var varfield_address = $('#field_address').val();
  	var varfield_PC = $('#field_PC').val();
	var inputAddress= varfield_address + ", "+ varFieldCity + varfield_PC;
	var iframeVar = document.getElementById("iframe");
	iframeVar.src = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB-_hQ1jJbLvEGWUK4sYD412b194evXlbw    &origin="+ inputAddress + "&destination=43.744136,-79.211772";
	return false;
}
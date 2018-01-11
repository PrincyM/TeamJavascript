

$(document).ready(function () {
   
	$(".hoverli").hover(function () {
     $(this).find('ul').slideToggle('medium');
    });

	$("#linecook").click(function() {
		
		$("#careersdisplay").show();
		$("#title2").html("Line Cook");
		$("#requirements").html("Minimum 5 years experience as a professional line cook. Soviet background preferred.");
		$("#compensation").html("14-20/hour, negotiable. Basic medical and dental benefits package.");
	});
	
	
});


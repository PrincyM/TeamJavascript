window.onload = function(){
document.getElementById("comradeform").addEventListener('submit', submitForm);


function submitForm() {
	
		event.preventDefault();
        var formName = document.getElementById('name').value;
        var formEmail = document.getElementById('email').value;
        var formDate = document.getElementById('date').value;
		var formMessage = document.getElementById('message').value;
			
			
	
		document.getElementById("formwrapper").style.display = "none";

		

        document.getElementById('hidebooking').style.display = "block";
	
		document.getElementById('displayname').innerHTML = formName;
		document.getElementById('displayemail').innerHTML = formEmail;
		document.getElementById('displaydate').innerHTML = formDate;
		document.getElementById('displaymessage').innerHTML = formMessage;
        return false;

    }


}
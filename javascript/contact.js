$(document).ready(function () {

$('#form').hide();     // hide form on load
$('#thanks_msg').hide();       // hide thanks section on load

$('#image-text').click(function() {
  $('#form').show(1000);             // on click, show the form
  $('#image-text').hide();             // hide everything else when form is on display
  $('.middle').hide();
  $('.image').hide();
})

$('form').submit(function() {            // on submit of the form, validating input


  // validating the form
  var ok = true;
  if($('#name').val() == "" || $('#name').val() == null)  {
  $('#name').focus();
  ok = false;
}

else if($('#email').val() == "" || $('#email').val() == null)
{
   $('#email').focus();
   ok = false;
}
else if($('#message').val() == "" || $('#message').val() == null)
{
$('#message').focus();
ok = false;
}

// end of validation
if(ok){           // if validation is done, display thanks message
  $('#image-text').hide();
  $('.middle').hide();
  $('.image').hide();
  $('#form').hide();
  $('#contact-msg').hide();
   $('#thanksCustomer').html($('#name').val());
   $('#thanksEmail').html($('#email').val());
  $('#thanks_msg').show();
}
  return false;
});

});

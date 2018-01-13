$(document).ready(function () {

$('#form').hide();
$('#thanks_msg').hide();

$('#image-text').click(function() {
  $('#form').show(1000);
  $('#image-text').hide();
  $('.middle').hide();
  $('.image').hide();
})

$('form').submit(function() {


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

// validation end
if(ok){
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

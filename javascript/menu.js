

$(document).ready(function () {

//on hover functionality for menu 

$('.gallery-item').hover(
  function() {
      $(this).find('.menu_img').css('opacity','0.4');   //change the menu images opacity on hover
      $(this).find('.img-title').css('opacity','1');    // change the opacity of the menu items so that they are seen on hover
        $(this).find('.img-title').fadeIn(300);         //fade in effect on hover in
    },
  function() {
    $(this).find('.menu_img').css('opacity','1');       // on hover out, change opacity back to normal
        $(this).find('.img-title').fadeOut(100);        //fade out effect on hover out
      }

    );

    });



$(document).ready(function () {


$('.gallery-item').hover(
  function() {
      $(this).find('.menu_img').css('opacity','0.4');
      $(this).find('.img-title').css('opacity','1');
        $(this).find('.img-title').fadeIn(300);
    },
  function() {
    $(this).find('.menu_img').css('opacity','1');
        $(this).find('.img-title').fadeOut(100);
      },

  // function() {
  //      $(this).find('.menu_img').css('opacity','0.3');
  //    }

    );

    });

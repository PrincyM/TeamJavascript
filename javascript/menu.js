
// alert("connected");
// jQuery(document).ready(function () {
//
// $('.menu-details').hide();
// // $('.menu-heading').hide();
//
// $('.menu-heading').click(function() {
//   $(this).next('.menu-details').slideToggle(1000);
// })
// });

jQuery(document).ready(function () {

// $('.menu-details').hide();
// $('.menu-heading').hide();

$('.menu-heading').click(function() {
  $(this).next('.menu-details').slideToggle(1000);
});



$('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });


});


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

$('.menu-details').hide();
// $('.menu-heading').hide();

$('.menu-heading').click(function() {
  $(this).next('#appetizer_id').slideToggle(2000);
})
});

$(document).ready(function(){
  $('#tab li').click(function(){
    $('#tab li').removeClass('active');
    $(this).addClass('active');
  });
});

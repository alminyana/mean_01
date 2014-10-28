$(document).ready(function(){
  $('#tab li').click(function(){
    $('#tab li').removeClass('active');
    $(this).addClass('active');
  });
  function doSomething(){
    $('#pepo').addClass('animated bounceInRight');
  }

  // $('#dos').click(function(){
  //   $('#titulito').addClass('animated bounceOutRight');
  //   $('#titulito').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
  // });


});

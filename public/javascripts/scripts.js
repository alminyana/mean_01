$(document).ready(function(){
  function marcarActivo() {
    var href = window.location.href;
    console.log(href);
    var num = href.lastIndexOf('/');
    var path = href.substring(num+1);
    console.log(path);
    switch (path) {
      case '':
        $('#tab li:first').addClass('active');
        break;
      case 'newlist':
        $('#dos').addClass('active');
        break;
      case 'todas':
        $('#tres').addClass('active');
        break;
    }
  }
  marcarActivo();
  //$('#tab li:first').addClass('active');
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

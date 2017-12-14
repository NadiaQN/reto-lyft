$(document).ready(function(){
  $('.login-register').hide();
  $('#splash-final').hide();
  setTimeout(function(){
    $('#splash').fadeOut(500);
    $('.login-register').show();
  }, 3000);

    $('#demo').intlTelInput();
    $('#next1').click(function(){
      $('#register').hide();
      var random = Math.floor(Math.random()*255);
      $('.code').prepend('<p> Tu código: LAB'+ -random);
    });
    $('#resend').click(function(){
      $('#verify-code').hide();
    });
    $('#next2').click(function(){
      $('#verify-code').hide();
    });

    $('#next3').click(function(){
      $('#sign-up').hide();
      $('#number-random').hide();
      setTimeout(function(){
        $('#splash-final').fadeOut(500);
        $('#principal').show();
        }, 3000);
    })


});


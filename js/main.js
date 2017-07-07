$(document).ready(function(){
  //microinteraction landing headline
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });

  // Get Current Year
  var d = new Date();
  var currentYear = d.getFullYear();
  $(".current-year").html(currentYear)

  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('#input-form-shiping').one('submit',function(){
    //reverse captcha
    var sp = $('#input-q7').val();
    if (sp == "") {
      //send form
      var inputq1 = encodeURIComponent($('#input-q1').val());
      var inputq2 = encodeURIComponent($('#input-q2').val());
      var inputq3 = encodeURIComponent($('#input-q3').val());
      var inputq4 = encodeURIComponent($('#input-q4').val());
      var q1ID = "entry.1219154318";//name entry.2129248737
      var q2ID = "entry.678091664";//email entry.1515862082
      var q3ID = "entry.1887721477";//phone
      var q4ID = "entry.330011480";//message
      var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScVgKtdM9t8fUVqNeakebUAhe8-lC56EUhQl0xdC2mLEiCikg/formResponse?';
      var submitRef = '&submit=Submit';
      var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + submitRef);
      console.log(submitURL);
      $(this)[0].action=submitURL;
      console.log("Enviou o google form");
      setTimeout(function(){
        window.location.href = "/contato-sent";
      }, 2000);
    } else {
      console.log("Falha ao enviar");
      return false;
    }
  });
});//wrapper end

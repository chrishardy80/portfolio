function main() {

  $('.projects').on('click',
    function() {
	     $('.home .redlight').css("background-color","inherit");
       $('.projects .redlight').css("background-color","#f74f4f");
       $('.contact .redlight').css("background-color","inherit");
       $('#aboutme').hide();
       $('#projectspage').show();
       $('#contactpage').hide();
       $('body').css("background-image", "url(./resources/images/background3.jpg)");
  });

  $('.contact').on('click',
    function() {
      $('.home .redlight').css("background-color","inherit");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","#f74f4f");
      $('#aboutme').hide();
      $('#projectspage').hide();
      $('#contactpage').show();
      $('body').css("background-image", "url(./resources/images/background3.jpg)");
  });

  $('.home').on('click',
    function() {
      $('.home .redlight').css("background-color","#f74f4f");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","inherit");
      $('#aboutme').show();
      $('#projectspage').hide();
      $('#contactpage').hide();
      $('body').css("background-image", "url(./resources/images/background.jpg)");
  });

}

$(document).ready(main);

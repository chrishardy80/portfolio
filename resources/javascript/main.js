function main() {

  $('#contactpage').hide();
  $('#projectspage').hide();

  $('.projects').on('click',
    function() {
	     $('.home .redlight').css("background-color","inherit");
       $('.projects .redlight').css("background-color","#f72aac");
       $('.contact .redlight').css("background-color","inherit");
       $('#aboutme').hide();
       $('#projectspage').show();
       $('#contactpage').hide();
  });

  $('.contact').on('click',
    function() {
      $('.home .redlight').css("background-color","inherit");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","#f72aac");
      $('#aboutme').hide();
      $('#projectspage').hide();
      $('#contactpage').show();
  });

  $('.home').on('click',
    function() {
      $('.home .redlight').css("background-color","#f72aac");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","inherit");
      $('#aboutme').show();
      $('#projectspage').hide();
      $('#contactpage').hide();
  });

  $('.button.one').on('click',
    function() {
	     $('.home .redlight').css("background-color","inherit");
       $('.projects .redlight').css("background-color","#f72aac");
       $('.contact .redlight').css("background-color","inherit");
       $('#aboutme').hide();
       $('#projectspage').show();
       $('#contactpage').hide();
  });

  $('.button.two').on('click',
    function() {
      $('.home .redlight').css("background-color","inherit");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","#f72aac");
      $('#aboutme').hide();
      $('#projectspage').hide();
      $('#contactpage').show();
  });

}

$(document).ready(main);

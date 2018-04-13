function main() {

  $('.projects').on('click',
    function() {
	     $('.home .redlight').css("background-color","inherit");
       $('.projects .redlight').css("background-color","#f74f4f");
       $('.contact .redlight').css("background-color","inherit");
  });

  $('.contact').on('click',
    function() {
      $('.home .redlight').css("background-color","inherit");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","#f74f4f");
  });

  $('.home').on('click',
    function() {
      $('.home .redlight').css("background-color","#f74f4f");
      $('.projects .redlight').css("background-color","inherit");
      $('.contact .redlight').css("background-color","inherit");
  });
  
}

$(document).ready(main);

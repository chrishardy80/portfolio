function main() {

  $('.mobile').on('click',
    function() {
      $('.mobilenav').animate({'right': '0'});
  });

  $('body').on('click touchstart',function(e) {
    if( $(e.target).closest(".mobile").length > 0 ) {
      return false;
  }
      $('.mobilenav').animate({'right': '-190'});
  });


}
$(document).ready(main);

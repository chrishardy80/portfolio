function main() {

  $('.mobile').on('click',
    function() {
      $('.mobilenav').animate({'right': '0'});
  });

  $('body').click(function(e) {
    if( $(e.target).closest(".mobile").length > 0 ) {
      return false;
  }
      $('.mobilenav').animate({'right': '-150'});
  });
}
$(document).ready(main);

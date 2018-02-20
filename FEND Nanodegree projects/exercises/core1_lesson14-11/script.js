$( document ).ready(function() {
  $( "#menu").click(function( event ) {
    $( ".nav").addClass("open__menu");
    event.preventDefault();
  });
  $( "#menu-close").click(function( event ) {
    $( ".nav").removeClass("open__menu");
  });
});

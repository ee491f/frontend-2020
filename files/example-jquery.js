$( document ).ready(function() {
  console.log( "jquery is ready" );
  $( "[function=hide]" ).on( "click", function() {
    $('a').fadeOut();
  });
  $( "[function=show]" ).on( "click", function() {
    $('a').fadeIn();
  });

  $('[function=background-switcher] [type=button]').on("click", function(event) {
    settingColors(event);
  });
});

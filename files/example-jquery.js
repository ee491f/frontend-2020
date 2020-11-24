$( document ).ready(function() {
  console.log( "jquery is ready" );
  $( "[function=hide]" ).on( "click", function() {
    $('a').fadeOut();
  });
  $( "[function=show]" ).on( "click", function() {
    $('a').fadeIn();
  });

  $('[function=background-switcher] [type=button]').on("click", function(event) {
    let badColors = [
      'black',
      'white',
    ];
    let color = $("[function=background-switcher] [type=text][name=color]").val();
    if (badColors.includes(color)) {
      $("[function=background-switcher] .warning").fadeIn();
    } else {
      $("[function=background-switcher] .warning").fadeOut();
      $('[function=background-switcher]').css("background-color", color);
    }
  });
});

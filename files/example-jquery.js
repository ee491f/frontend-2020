function settingColors(event) {
  $("[function=background-switcher] .warning").fadeOut();
  let colors = {
    badColors: [
      'black',
      'white',
    ],
    goodColors: [
      'blue',
      'yellow',
    ]
  };
  let color = $("[function=background-switcher] [type=text][name=color]").val();
  if (colors['badColors'].includes(color)) {
    $("[function=background-switcher] .warning.bad-color").fadeIn();
  } else if (colors['goodColors'].includes(color)) {
    $('[function=background-switcher]').css("background-color", color);
  } else {
    $("[function=background-switcher] .warning.unknown-color").fadeIn();
  }
};



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

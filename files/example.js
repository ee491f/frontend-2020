$( document ).ready(function() {
    console.log( "ready!" );
    $( "[function=hide]" ).on( "click", function() {
        $('a').fadeOut();
    });
    $( "[function=show]" ).on( "click", function() {
        $('a').fadeIn();
    });
});

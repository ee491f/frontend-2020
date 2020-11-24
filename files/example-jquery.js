$( document ).ready(function() {
    console.log( "jquery is ready" );
    $( "[function=hide]" ).on( "click", function() {
        $('a').fadeOut();
    });
    $( "[function=show]" ).on( "click", function() {
        $('a').fadeIn();
    });
});

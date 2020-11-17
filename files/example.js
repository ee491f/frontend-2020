$( document ).ready(function() {
    console.log( "ready!" );
    $( "[function=hide]" ).on( "click", function() {
        $('a').remove();
        $('br').remove();
        $('.outer, .inner').removeClass(['outer', 'inner'])
    });
    $( "[function=show]" ).on( "click", function() {
        $('a').fadeIn();
    });
});

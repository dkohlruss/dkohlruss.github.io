$( document ).ready(function() {
    var $intro = $('.intro');
    $('.firstbelow').css('margin-top', $intro.height()).css('width', $intro.width() );

});

$( window ).resize(function() {
    var $intro = $('.intro');
    $('.firstbelow').css('margin-top', $intro.height()).css('width', $intro.width() );
});
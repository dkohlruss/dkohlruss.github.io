$( document ).ready(function() {
    var $intro = $('.intro');
    $('.firstbelow').css('margin-top', $intro.height()).css('width', $intro.width() );

    if ($(window).width() < 768) {
        $('.intro').css('background','rgb(50,50,50)');
    }
});

$( window ).resize(function() {
    var $intro = $('.intro');
    $('.firstbelow').css('margin-top', $intro.height()).css('width', $intro.width() );

    if ($(window).width() < 768) {
        $('.intro').css('background','rgb(50,50,50)');
    } else {
        $('.intro').css('background', 'none');
    }
});
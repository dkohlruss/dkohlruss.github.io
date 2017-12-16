$(document).ready(function() {
	// Make a call to API to spin up the backend for eCommerce web apple
	$.get('https://ecommerceback.herokuapp.com/', function(data) {
		console.log('Get request to eCommerce backend to spin up heroku');
	});

	var $intro = $('.intro');
	$('.firstbelow')
		.css('margin-top', $intro.height())
		.css('width', $intro.width());

	if ($(window).width() < 768) {
		$('.intro').css('background', 'rgb(50,50,50)');
	}
});

$(window).resize(function() {
	var $intro = $('.intro');
	$('.firstbelow')
		.css('margin-top', $intro.height())
		.css('width', $intro.width());

	if ($(window).width() < 768) {
		$('.intro').css('background', 'rgb(50,50,50)');
	} else {
		$('.intro').css('background', 'none');
	}

	if ($(window).height < 550) {
		$('.logo').css('display', 'none');
	}
});

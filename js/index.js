function getClassPosition(className) {
	var bottom_of_object = $(className).offset().top + $(className).outerHeight();
	var bottom_of_window = $(window).scrollTop() + $(window).height();

	if (bottom_of_window > bottom_of_object) {
		return true;
	}
	return false;
}

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
		$('.intro').css(
			'background',
			'linear-gradient(to bottom, rgba(14,14,14,1) 0%,rgba(125,126,125,1) 100%)'
		);
	}
});

$(window).scroll(function() {
	$('.project-entry').each(function(i) {
		if (getClassPosition(this)) {
			$(this).animate({ opacity: '1' }, 500);
		}
	});

	$('.project-img').each(function(i) {
		if (getClassPosition(this)) {
			$(this).animate({ left: '30px' }, 500);
		}
	});

	$('.project-desc').each(function(i) {
		if (getClassPosition(this)) {
			$(this).animate({ right: '30px' }, 500);
		}
	});
});

$(window).resize(function() {
	var $intro = $('.intro');
	$('.firstbelow')
		.css('margin-top', $intro.height())
		.css('width', $intro.width());

	if ($(window).width() < 768) {
		$('.intro').css(
			'background',
			'linear-gradient(to bottom, rgba(14,14,14,1) 0%,rgba(125,126,125,1) 100%)'
		);
	} else {
		$('.intro').css('background', 'none');
	}

	if ($(window).height < 550) {
		$('.logo').css('display', 'none');
	}
});

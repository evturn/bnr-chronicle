new WOW().init();

$(function() {
		
	var $wrapper = $('.navigation-wrapper');
	var $closeBtn = $('.navigation-close');
	var $links = $('.links-container');

	$(document).on('click', '.nav-hamburger', function() {
		$wrapper
			.removeClass('slideOutUp')
			.removeClass('hidden');
	});

	$(document).on('click', '.navigation-close', function() {
		$wrapper
			.addClass('slideOutUp');
			
			

	});


});
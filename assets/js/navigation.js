new WOW().init();

$(function() {
	$(document).on('click', '.nav-hamburger', function() {
		$('.navigation-wrapper').removeClass('hidden');
	});
	$(document).on('click', '.navigation-close', function() {
		$('.navigation-wrapper').addClass('hidden');
	});


});
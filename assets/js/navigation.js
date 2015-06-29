$(function() {
	$(document).on('click', '.nav-hamburger .fa-bars', function() {
		$('.navigation-wrapper').removeClass('hidden');
	});
	$(document).on('click', '.navigation-header .fa-times', function() {
		$('.navigation-wrapper').addClass('hidden');
	});
});
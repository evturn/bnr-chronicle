$(function() {
	$(document).on('click', '.nav-hamburger', function() {
		$('.navigation-wrapper').removeClass('hidden');
	});
	$(document).on('click', '.navigation-header .fa-times', function() {
		$('.navigation-wrapper').addClass('hidden');
	});
});
$(function() {
	$(document).on('click', '.search-field-open', function() {
		$('.search-launch').addClass('hidden');
		$('.collapsible').slideToggle(150);
		$('.collapsible').removeClass('hidden');
		$('.search-input').focus();
	});
	$(document).on('click', '.search-field-collapse', function() {
		var $self = $(this);
		$('.collapsible').slideToggle(150, function() {
			$('.search-launch').removeClass('hidden');
		});
		$self.addClass('hidden');
	});	

	
	$('[data-toggle="popover"]').popover({html: true});
	

});
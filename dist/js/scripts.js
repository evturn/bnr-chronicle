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
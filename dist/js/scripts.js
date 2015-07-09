var BCCHRONICLE = {

	init: function () {
		$('.nav-hamburger').on('click', function() {
			BCCHRONICLE.openNavigation();
			BCCHRONICLE.showLinks();
		});

		$('.navigation-close').on('click', function() {
			BCCHRONICLE.hideLinks();
			BCCHRONICLE.closeNavigation();
		});
	},
	openNavigation: function() {
		var $wrapper = $('.navigation-wrapper');
		$wrapper.removeClass('trigger-delay');
		$wrapper.removeClass('slideOutUp');
		$wrapper.removeClass('hidden');
	},
	closeNavigation: function() {
		var $wrapper = $('.navigation-wrapper');
		$wrapper.addClass('trigger-delay');
		$wrapper.addClass('slideOutUp');
	},
	showLinks: function() {
		var $navigationText = $('.links-container, .navigation-close');
		$navigationText.addClass('trigger-delay');
		$navigationText.removeClass('fadeOut');
		$navigationText.addClass('fadeIn');
		$navigationText.removeClass('hidden');
	},
	hideLinks: function() {
		var $navigationText = $('.links-container, .navigation-close');
		$navigationText.removeClass('trigger-delay');
		$navigationText.addClass('fadeOut');
	}
};


$(document).ready(function () {
	BCCHRONICLE.init();
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
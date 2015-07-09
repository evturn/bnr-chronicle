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

		$('.search-field-open').on('click', function() {
			BCCHRONICLE.openSearchBar();
		});

		$('.search-field-collapse').on('click', function() {
			BCCHRONICLE.closeSearchBar();
		});

		BCCHRONICLE.bindPopovers();

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
		var $logo = $('.navigation-header .nav-logo');
		$logo.addClass('trigger-delay');
		$navigationText.addClass('trigger-delay');
		$logo.removeClass('fadeOut');
		$navigationText.removeClass('fadeOut');
		$logo.addClass('fadeIn');
		$navigationText.addClass('fadeIn');
		$logo.removeClass('hidden');
		$navigationText.removeClass('hidden');
	},

	hideLinks: function() {
		var $navigationText = $('.links-container, .navigation-close');
		var $logo = $('.navigation-header .nav-logo');
		$navigationText.removeClass('trigger-delay');
		$logo.removeClass('trigger-delay');
		$navigationText.addClass('fadeOut');
		$logo.addClass('fadeOut');
	},

	openSearchBar: function() {
		var $collapsible = $('.collapsible');
		var $launchSearch = $('.search-launch');
		var $input = $('.search-input');
		$launchSearch.addClass('hidden');
		$collapsible.slideToggle(150);
		$collapsible.removeClass('hidden');
		$input.focus();
	},

	closeSearchBar: function() {
		var $collapsible = $('.collapsible');
		var $closeSearch = $('.search-field-collapse');
		var $launchSearch = $('.search-launch');
		$collapsible.slideToggle(150, function() {
			$launchSearch.removeClass('hidden');
		});
		$closeSearch.addClass('hidden');
	},

	bindPopovers: function() {
		$('[data-toggle="popover"]').popover({html: true});	
	}

};


$(document).ready(function () {
	BCCHRONICLE.init();
});
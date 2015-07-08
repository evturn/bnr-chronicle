$(function() {
		
	var $wrapper = $('.navigation-wrapper');
	var links = '.links-container';
	var closeBtn = '.navigation-close';
	var $navigationText = $(links + ', ' + closeBtn);

	$(document).on('click', '.nav-hamburger', function() {
		openNavigation();
		setTimeout(showLinks, 800);
	});

	$(document).on('click', '.navigation-close', function() {
		hideLinks();
		setTimeout(closeNavigation, 500);
	});

	function openNavigation() {
		$wrapper
			.removeClass('slideOutUp')
			.removeClass('hidden');
	}

	function closeNavigation() {
		$wrapper.addClass('slideOutUp');
	}
	
	function showLinks() {
		$navigationText
			.removeClass('fadeOut')
			.addClass('fadeIn')
			.removeClass('hidden');
	}

	function hideLinks() {
		$navigationText.addClass('fadeOut');
	}

});
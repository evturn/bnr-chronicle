new WOW().init();

$(function() {
		
	var $wrapper = $('.navigation-wrapper');
	var $closeBtn = $('.navigation-close');
	var $links = $('.links-container');

	$(document).on('click', '.nav-hamburger', function() {
		
		function openNavigation() {
			$wrapper
				.removeClass('slideOutUp')
				.removeClass('hidden');
		}

			
		function showLinks() {
			$links
				.removeClass('fadeOut')
				.addClass('fadeIn')
				.removeClass('hidden');
			$closeBtn
				.removeClass('fadeOut')
				.addClass('fadeIn')
				.removeClass('hidden');
		}

		openNavigation();
		setTimeout(showLinks, 800);

	});

	$(document).on('click', '.navigation-close', function() {

		function hideLinks() {
				$links
					.addClass('fadeOut');
				$closeBtn
					.addClass('fadeOut');
			}


		function closeNavigation() {
			$wrapper.addClass('slideOutUp');
		}
			
		hideLinks();
		setTimeout(closeNavigation, 500);

	});


});
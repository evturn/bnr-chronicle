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
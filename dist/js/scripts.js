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
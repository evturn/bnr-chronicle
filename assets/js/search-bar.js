$(function() {
	$(document).on('click', '.search-field-open', function() {
		$('.search-launch').addClass('hidden');
		$('.collapsible').slideToggle();
		$('.collapsible').removeClass('hidden');
	});
	$(document).on('click', '.search-field-collapse', function() {
		var $self = $(this);
		$('.collapsible').slideToggle('fast', function() {
			$('.search-launch').removeClass('hidden');
		});
		$self.addClass('hidden');
	});
	$(document).on('click', '.search-focus', function() {
		$('.search-input').focus();
	});
});
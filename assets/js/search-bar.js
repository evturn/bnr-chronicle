$(function() {
	$(document).on('click', '.search-field-open', function() {
		$('.collapsible').removeClass('hidden');
		$('.search-launch').addClass('hidden');
	});
	$(document).on('click', '.search-field-collapse', function() {
		$('.search-launch').removeClass('hidden');
		$('.collapsible').addClass('hidden');
	});
	$(document).on('click', '.search-focus', function() {
		$('.search-input').focus();
	});
});
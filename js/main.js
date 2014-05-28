$(function() {

	$('.dropdown').on('shown.bs.dropdown', function () {
		var w = $(this).width();
		$('.dropdown-menu:first', this).css({ 'min-width':w });
	});
	
});
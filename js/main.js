$(function() {

	$('.dropdown').on('shown.bs.dropdown', function () {
		var w = $(this).width();
		$('.dropdown-menu:first', this).css({ 'min-width':w });
	});

	$('.dropdown-submenu').click(function(){
		$(this).toggleClass('open');
		return false;
	});
	
	$('#gal-preview a').click(function() {
		
		$('#gal-preview a').removeClass('active');
		
		var src = $(this).addClass('active').attr('href');

		$('#gal img').fadeTo(400, '.01', function() {
			$('#gal img').attr('src',src).fadeTo(400,1);
		});

		return false;
	});
});
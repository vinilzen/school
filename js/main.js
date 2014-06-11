$(function() {

	$('.dropdown').on('shown.bs.dropdown', function () {
		var w = $(this).width();
		if (w) $('.dropdown-menu', this).first().css({ 'min-width':w });
	});

	$(document).on('click',function(e){
		if (document.body.clientWidth <= 1024) {
			if($(e.target).closest('.navbar-collapse').length != 1 && $(e.target).closest('.navbar-toggle').length != 1){
				$('.collapse').collapse('hide');
			}
		}
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


	if (document.body.clientWidth < 768 && $('.slick').length ) {
		$('.slick').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			accessibility:false,
			arrows:false,
		});
	}

	$(window).resize(function(){
		if (document.body.clientWidth < 768 && $('.slick').length ) {
			$('.slick').slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay:true,
			});
		} else {
			if ($('.slick-slider').length) $('.slick').unslick();
		}
	});

});
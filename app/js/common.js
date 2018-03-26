$(function() {

	// Mobile menu
	$(".mymenu-wrapper").click(function() {
		$(this).toggleClass("toggle-on");
	});

	// Slick slider 1
	$('.myblock1-slider').slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		arrows: false
	});
	$('.slider1-next').on('click', function() {
		$('.myblock1-slider').slick('slickNext');
	});
	$('.slider1-prev').on('click', function() {
		$('.myblock1-slider').slick('slickPrev');
	});

	if(($('.phone').length > 0)){
		$('.phone').inputmask("+7 (999) 999-99-99");
	}

});

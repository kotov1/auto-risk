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
	if(($('.popup-date').length > 0)){
		$('.popup-date').inputmask("99.99.99");
	}
	if(($('.popup-time').length > 0)){
		$('.popup-time').inputmask("99:99");
	}



	$('.popup1').magnificPopup({
		items: {
			src: '#popup-form1',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup2').magnificPopup({
		items: {
			src: '#popup-form2',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup3').magnificPopup({
		items: {
			src: '#popup-form3',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup4').magnificPopup({
		items: {
			src: '#popup-form4',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup5').magnificPopup({
		items: {
			src: '#popup-form5',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup6').magnificPopup({
		items: {
			src: '#popup-form6',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup7').magnificPopup({
		items: {
			src: '#popup-form7',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup8').magnificPopup({
		items: {
			src: '#popup-form8',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup9').magnificPopup({
		items: {
			src: '#popup-form9',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup10').magnificPopup({
		items: {
			src: '#popup-form10',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup11').magnificPopup({
		items: {
			src: '#popup-form11',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.popup12').magnificPopup({
		items: {
			src: '#popup-form12',
			closeBtnInside: true,
			type: 'inline'
		}
	});

	$('.popup-form-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		autoplay: true,
		nextArrow: '<div class="slider-arrow slider-popup-next"></div>',
		prevArrow: '<div class="slider-arrow slider-popup-prev"></div>'
	});


});

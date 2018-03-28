$(function() {

	$(".mymenu-wrapper").click(function() {
		$(this).toggleClass("toggle-on");
	});


	// Slick slider 1
	$('.myblock1-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		infinite: true,
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



	$(window).scroll(function () {
		if ($(this).scrollTop() > 101) {	
			$('.uparrow-container').fadeIn();
		} else {
			$('.uparrow-container').fadeOut();
		}
	});
	$('.uparrow').click(function () {
		$('body,html').animate({scrollTop: 0}, 499);
		return false;
	});	


	$(".textblock-mypicture").click(function(){
		if ($('.textblock-popup-picture').hasClass('for-textblock-popup-picture')){

			$('.textblock-popup-picture').empty().removeClass('for-textblock-popup-picture');

		}else{
			if($(window).width() > 500 ) {
			$( document.body ).append('<div class="popup-overlay"></div>');
			var mfpImg = $(this).data('mfp');
			$('.textblock-popup-picture').append('<img src ='+mfpImg+'>');
			$('.textblock-popup-picture').append('<div class="mfp-close"></div>');
			$('.textblock-popup-picture img').css({"width":"300px","margin":"0","height":"260px","display":"block"});

			$('.textblock-popup-picture').addClass('for-textblock-popup-picture');

			$('.textblock-popup-picture .mfp-close').click(function(){
				$('.textblock-popup-picture').empty().removeClass('for-textblock-popup-picture');
				$('.popup-overlay').remove();
			});
			}
		}
	});
	$(document).mouseup(function (e){
		var div = $(".textblock-popup-picture");
		if ( (!div.is(e.target) && div.has(e.target).length === 0) && div.hasClass('for-textblock-popup-picture') ) {

			$('.textblock-popup-picture').empty().removeClass('for-textblock-popup-picture');
			$('.popup-overlay').remove();

		}
	});


	$(".send-form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			
			setTimeout(function() {
				$.magnificPopup.open({
					items: {
			   		src: '.popup-success',
			    		type: 'inline',
			   		mainClass: 'mfp-fade'
					} 
				});
			}, 1000);
			setTimeout(function() {
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});	


	$('.js-open-zayavka').magnificPopup({
		items: {
			src: '.popup-zayavka',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.js-open-zvonok').magnificPopup({
		items: {
			src: '.popup-zvonok',
			closeBtnInside: true,
			type: 'inline'
		}
	});


});

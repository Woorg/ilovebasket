import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
// import Swup from 'swup';
// import 'magnific-popup';
import packery from 'packery/dist/packery.pkgd.js';
import imagesLoaded from 'imagesloaded/imagesloaded.pkgd.min.js';


(function ($) {

	svg4everybody();

	$(function() {

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 16px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);


			var $gridContainer = $('.partner__images');

			if ( $gridContainer.length ) {
				$gridContainer.packery({
					// options
					itemSelector: '.partner__images-link',
					gutter: '.gutter-sizer',
					percentPosition: true,
					horizontal: false,
					resize: true,
					// stamp: '.partner__images-link_stamp'
				  });
			}

			var $testimonials = $('.testimonials__list');

			if( $testimonials.length ) {
				$testimonials.slick({
					slidesToShow: 3,
					arrows: true,
					speed: 500,
					centerMode: true,
					centerPadding: '0px',
					nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg class="testimonials__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;"><svg class="testimonials__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					infinite: true,
					adaptiveHeight: true,
					// variableWidth: true,
					dots: true,
					responsive: [
						{
						  breakpoint: 768,
						  settings: {
							slidesToShow: 1,
							dots: true,
							arrows: true
						  }
						}
					]
				});
			}

			var $partners = $('.partners__list');

			if( $partners.length ) {
				$partners.slick({
					slidesToShow: 4,
					arrows: true,
					speed: 500,
					nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg class="partners__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;"><svg class="partners__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					infinite: true,
					adaptiveHeight: true,
					// variableWidth: true,
					dots: true,
					responsive: [
						{
							breakpoint: 991,
							settings: {
							  slidesToShow: 3,
							  dots: true,
							  arrows: true
							}
						},
						{
						  breakpoint: 768,
						  settings: {
							slidesToShow: 1,
							dots: true,
							arrows: true
						  }
						}
					]
				});
			}

			// slider
			var $slick_slider = $('.steps__list');
			var settings_slider = {
				dots: true,
				arrows: false,
				fade: true,
				slidesToShow: 1,
				// initialSlide: 0,
				adaptiveHeight: true
				// more settings
			}

			// slick on mobile
			function slick_on_mobile(slider, settings){
				$(window).on('load resize', function() {
					if ($(window).width() > 991) {
					if (slider.hasClass('slick-initialized')) {
					slider.slick('unslick');
					}
					return
				}
				if (!slider.hasClass('slick-initialized')) {
					return slider.slick(settings);
				}
				});
			};

			slick_on_mobile( $slick_slider, settings_slider);

			// Magnific

			// $('.slider__link').magnificPopup({
			// 	type: 'image',
			// 	gallery:{
			// 		enabled:true
			// 	}
			// });

	});


})(jQuery);

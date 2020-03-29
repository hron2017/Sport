$('.header-top__btn-icon').click(function () {
	$('.header-top__form, .header-top__btn').toggleClass('visible');
});
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();

/*
$('.').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	verticalSwiping: true,
	dots: true,
	arrows: false,

});

*/

$('.review-slider').slick({
	appendArrows: $('.review-slider__arows'),
	prevArrow: '<button type="button" class="slick-prev review-slider__prev review-slider__btn">вліво</button>',
	nextArrow: '<button type="button" class="slick-next review-slider__next review-slider__btn">вправо</button>',
	dots: true,
	dotsClass: 'review-dots'
});


new fullpage('#fullpage', {


	navigation: true,
	navigationPosition: 'left',
	verticalCentered: true,

});

$('#fp-nav').append('<div class="fp-nav__text">гортай вниз</div>');

$('.footer-body__image-icon').click(function () {

	$(".footer-body__image-icon").removeClass('active');
	$(this).addClass("active");

	let icon = $(this).data('icon');

	switch (icon) {
		case 2:
			return $(this).parent().parent().find('.footer__column').find('.footer-body__location').html('м.Київ <span>Івана Франка 3</span>')
		case 3:
			return $(this).parent().parent().find('.footer__column').find('.footer-body__location').html('м.Одеса <span>Дерибасовська 75</span>')
		default:
			return $(this).parent().parent().find('.footer__column').find('.footer-body__location').html('м. Львів <span>Площа ринок 8</span>')

	}
});

$(function(){
	$('.fairy-tail__slider, .our-trip__slider').slick({
		prevArrow:'<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="previous arrow"></button>',
		nextArrow:'<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next arrow"></button>',
		autoplay:true,
		autoplaySpeed:3000,
		fade:true
	});
});
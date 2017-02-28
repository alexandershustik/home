//main-slider

var slideDomCount = $('.slides img').length;
activeSlide = 0;

//interval =  setInterval( changeSlide, 4000);

function changeSlide(){
	slideDomEl = '.slides img[data-slide=' + activeSlide + ']';
	slideDomEl2 = '.lead-text[data-slide=' + activeSlide + ']';

	$('.slides img').removeClass('active');
	$('.slides img').removeClass('left');
	$('.lead-text').removeClass('active');

	$(slideDomEl).addClass('active');
	$(slideDomEl2).addClass('active');

	(activeSlide <= 0) ? $('.slider-arr-wrap.left').attr('data-slide', slideDomCount - 1) : $('.slider-arr-wrap.left').attr('data-slide', activeSlide - 1);
	(activeSlide >= slideDomCount - 1) ? $('.slider-arr-wrap.right').attr('data-slide', 0) : $('.slider-arr-wrap.right').attr('data-slide', parseInt(activeSlide) + 1);

	(activeSlide <= 0) ? $('.slides img:last-child').addClass('left') : $(slideDomEl).prev().addClass('left');
	//(activeSlide <= 0) ? $('.lead-text:last-child').addClass('left') : $(slideDomEl2).prev().addClass('left');

	(activeSlide < slideDomCount - 1) ? activeSlide++ : activeSlide = 0;

}
changeSlide();

$('.slider-arr-wrap.left').click(function(){
	activeSlide = $('.slider-arr-wrap.left').attr('data-slide');
	interval = clearInterval(interval);
	changeSlide();
	interval =  setInterval( changeSlide, 4000);
});
$('.slider-arr-wrap.right').click(function(){
	activeSlide = $('.slider-arr-wrap.right').attr('data-slide');
	interval = clearInterval(interval);
	changeSlide();
	interval =  setInterval( changeSlide, 4000);
});

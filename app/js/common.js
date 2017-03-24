//main-slider

var slideDomCount = $('.slides img').length;
activeSlide = 0;

interval =  setInterval( changeSlide, 4000);

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

// map

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		scrollwheel: false,
		zoom: 12,
		center: {lat: 55.718889, lng: 38.626745},
		disableDefaultUI: true,
		//scrollwheel: false,
		//draggable: false,
		panControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
	});

	var styles = [
	  {
	    stylers: [
	      { hue: "#8bd434" },
	      { saturation: -60 }
	    ]
	  }
	];

	map.setOptions({styles: styles});

	var mark = new google.maps.Marker({
		position: {lat: 55.718889, lng: 38.626745},
		map: map,
		icon: 'img/map-marker.png'
	});
}

//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

//validation
$patternName = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
$patternPhone = /^[0-9+]+$/;
$patternEmail = /[^\s]+[@][^\s]+/;

$feedbackName = $('.feedback-form .tabs-input[name="name"]');
$feedbackPhone = $('.feedback-form .tabs-input[name="phone"]');
$feedbackSubmit = $('.feedback-form .tabs-submit');

$feedbackName.on('input', function(){
	if($(this).val().search($patternName) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
		$feedbackSubmit.prop( "disabled", true );
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmit();
	}
});
$feedbackPhone.on('input', function(){
	if($(this).val().search($patternPhone) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
		$feedbackSubmit.prop( "disabled", true );
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmit();
	}
});


//validation popup

$popupName = $('.popup-form .popup-input[name="name"]');
$popupPhone = $('.popup-form .popup-input[name="phone"]');
$popupEmail = $('.popup-form .popup-input[name="email"]');
$popupSubmit = $('.popup-form .popup-submit');

$popupName.on('input', function(){
	if($(this).val().search($patternName) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
		$popupSubmit.prop( "disabled", true );
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmitPopup();
	}
});
$popupPhone.on('input', function(){
	if($(this).val().search($patternPhone) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
		$popupSubmit.prop( "disabled", true );
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmitPopup();
	}
});
$popupEmail.on('input', function(){
	if($(this).val().search($patternEmail) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmitPopup();
	}
});








function enableSubmit(){
 	if(
 		$feedbackName.hasClass('success') &&
 		$feedbackPhone.hasClass('success')
 	) $feedbackSubmit.prop( "disabled", false );
 	else $feedbackSubmit.prop( "disabled", true );
}
function enableSubmitPopup(){
 	if(
 		$popupName.hasClass('success') &&
 		$popupPhone.hasClass('success')
 	) $popupSubmit.prop( "disabled", false );
 	else $popupSubmit.prop( "disabled", true );
}
//ajax
$(".feedback-form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "get",
		url: "http://localhost:3006/img/map-marker.png", //Change
		data: th.serialize()
	}).done(function() {
		$(".feed-success-wrap").addClass('success');
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			$(".feed-success-wrap").removeClass('success');
		}, 1000);
	});
	return false;
});
$(".feed-success-wrap").click(function(){
	$(this).removeClass('success');
	$(".feedback-form").trigger("reset");
})

$(".popup-form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "get",
		url: "http://localhost:3006/img/map-marker.png", //Change
		data: th.serialize()
	}).done(function() {
		$(".popup-success-wrap").addClass('success');
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			$(".popup-success-wrap").removeClass('success');
		}, 1000);
	});
	return false;
});
$(".feed-success-wrap").click(function(){
	$(this).removeClass('success');
	$(".feedback-form").trigger("reset");
})

//inside-slider
$('.inside-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.inside-slider-nav'
});
$('.inside-slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.inside-slider',
	dots: false,
	centerMode: true,
	focusOnSelect: true
});

//popup close btn

$('.popup-wrap').click(function(){
	$('.hidden').removeClass('open');
})
$('.btn.sbm-btn.sub').click(function(){
	$('.hidden').addClass('open');
})



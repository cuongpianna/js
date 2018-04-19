$(function() {

	//tinh vị trí bằng hàm .offset .top
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :$('.chapter1').offset().top}, 1400,"easeOutElastic");
	});

	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :$('.chapter2').offset().top}, 500,"easeOutElastic");
	});

	$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :$('.chapter3').offset().top}, 500,"easeOutElastic");
	});

	$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :$('.chapter4').offset().top}, 500,"easeOutElastic");
	});

	$('.menutren ul li:nth-child(5) a').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :$('.chapter5').offset().top}, 500,"easeOutElastic");
	});

	$('.nut').on('click', function(event) {
		console.log('ba, vao');
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop :0}, 500,"easeOutElastic");
	});
});
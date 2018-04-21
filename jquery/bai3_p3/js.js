$(function() {
	$('.tdkhoi').click(function(event) {
		$(this).toggleClass('xanh');
		$(this).next().slideToggle();
		$('body').animate({scrollTop:$(this).offset().top})

		// code fancybox

	});;
	$('.vaicaianh a').fancybox();
});
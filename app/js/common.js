$(function() {

	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('header nav ul').toggleClass('animated fadeInLeft animate_padding');
	});

	$('header i').click(function(){
		$('.wrap_input input').toggleClass('animated fadeInRight');
	});

	$(".owl-carousel").owlCarousel({
		items: 1
	});


});

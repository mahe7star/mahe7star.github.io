$(function(){
	$('.mp-main').load('landing.html');
	$('#home').click(function(){
		// $('.mg-section').fadeOut();
		$('.m1').removeClass('socialMax');
		// $('.landing-section').fadeIn();
		$('.mp-main').load('landing.html');
	});
	$('#about').click(function(){
		// $('.mg-section').fadeOut();
		// $('.mg-section').hide();
		$('.m1').removeClass('socialMax');
		// $('.about-content').fadeIn();
		$('.mp-main').load('about.html');
	});
	$('#contact').click(function(){
		var side = $('.m1');
		side.addClass('socialMax');
	});
	$('#portfolio').click(function(){
		// $('.mg-section').fadeOut();
		// $('.mg-section').hide();
		$('.m1').removeClass('socialMax');
		// $('.portfolio').fadeIn();
		$('.mp-main').load('portfolio.html');
	});
	$('.work-btn').click(function(){
		// $('#portfolio').trigger('click');
		$('.mp-main').load('portfolio.html');
	})
});


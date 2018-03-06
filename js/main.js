$(function(){
	$('#home>a').addClass('active-link');
	$('.mp-main').load('landing.html');
	$('#home').click(function(){
		$('.m1').removeClass('socialMax');
		$('.li>a').removeClass('active-link');
		$('#home>a').addClass('active-link');
		$('.mp-main').load('landing.html');
	});
	$('#about').click(function(){
		$('.m1').removeClass('socialMax');
		$('.li>a').removeClass('active-link');
		$('#about>a').addClass('active-link');
		$('.mp-main').load('about.html');
	});
	$('#contact').click(function(){
		var side = $('.m1');
		$('.li>a').removeClass('active-link');
		$('#contact>a').addClass('active-link');
		side.addClass('socialMax');
	});
	$('#portfolio').click(function(){
		$('.m1').removeClass('socialMax');
		$('.li>a').removeClass('active-link');
		$('#portfolio>a').addClass('active-link');
		$('.mp-main').load('portfolio.html');
	});

	$('.nav-btn').click(function(){
		console.log("this running");
		$('.nav-btn-lines').eq(0).toggleClass('nav-btn-lines-rt1');
		$('.nav-btn-lines').eq(1).toggleClass('nav-btn-lines-rt2');
		$('.header-logo').toggleClass('header-logo-max');
		$('.m5').toggleClass('m5-max');
		
	});
	$('.m5').find('.m5-a').click(function(){
		$('.nav-btn').trigger('click');
	});
});


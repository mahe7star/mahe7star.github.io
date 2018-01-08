$(function(){
	$('#home').click(function(){
		$('.mg-section').addClass('index-0');
		$('.landing-section').removeClass('index-0');
		$('body').find('animated').removeClass('animated fadeIn');
		$('.desc').addClass('animated fadeInUp');
	});
	$('#about').click(function(){
		$('.mg-section').addClass('index-0');
		$('.about-content').removeClass('index-0');
		$('body').find('animated').removeClass('animated fadeIn');
		$('.mid-content-div').addClass('animated fadeIn');
	});
});


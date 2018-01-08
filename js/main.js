$(function(){
	$('#home').click(function(){
		$('.mg-section').hide();
		$('.landing-section').fadeIn();
		// $('.mg-section').addClass('index-0');
		// $('.landing-section').removeClass('index-0');
	});
	$('#about').click(function(){
		$('.mg-section').hide();
		$('.about-content').fadeIn();
		// $('.mg-section').addClass('index-0');
		// $('.about-content').removeClass('index-0');
	});
});


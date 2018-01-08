$(function(){
	$('#home').trigger('focus');
	$('#home').click(function(){
		$('.mg-section').fadeOut();
		$('.landing-section').fadeIn();
	});
	$('#about').click(function(){
		$('.mg-section').fadeOut();
		$('.mg-section').hide();
		$('.about-content').fadeIn();
	});
});


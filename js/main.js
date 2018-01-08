$(function(){
	$('#home').trigger('focus');
	$('#home').click(function(){
		$('.mg-section').hide();
		$('.landing-section').fadeIn();
	});
	$('#about').click(function(){
		$('.mg-section').hide();
		$('.about-content').fadeIn();
	});
});


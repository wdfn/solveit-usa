$(document).ready(function(){
	
	$('#home').hover(function(){
		$('#home').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#home").css('border-top', 'none');
	});

	$('#about').hover(function(){
		$('#about').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#about").css('border-top', 'none');
	});

	$('#contact').hover(function(){
		$('#contact').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#contact").css('border-top', 'none');
	});

	$('#forums').hover(function(){
		$('#forums').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#forums").css('border-top', 'none');
	});

	$('#signup').hover(function(){
		$('#signup').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#signup").css('border-top', 'none');
	});

	$('#login').hover(function(){
		$('#login').css('border-top', '3px solid #FF684F');
	}, function(){
		$("#login").css('border-top', 'none');
	});

	//MODALS
	$('#login').click(function(){
		$('#modal-container_login').fadeIn().css({'display': 'block'});
	});

	$('.button').click(function(){
		$('#modal-container_login').fadeOut();
	});


	//"HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#modal-overlay_login').click(function(){
		$('#modal-container_login').fadeOut();
	});

	$('#signup').click(function(){
		$('#modal-container_signup').fadeIn().css({'display': 'block'});
	});

	$('.button').click(function(){
		$('#modal-container_signup').fadeOut();
	});


	//"HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#modal-overlay_signup').click(function(){
		$('#modal-container_signup').fadeOut();
	});



});
$(document).ready(function(){

	function valideForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите своё имя",
				phone: "Пожалуйста, введите свой телефон",
				email: {
					  required: "Пожалуйста, введите свой E-mail",
					  email: "Неправильно введен E-mail адрес"
				}
			}
		});
	};

	valideForms('#consultation-form');
	valideForms('#letter-form');

	$('input[name=phone]').mask("+9 (999) 999-99-99");


	$('.slider__carousel').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/reviews_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/reviews_right.png"></button>'
	});


	$(window).scroll(function() {
		if($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});


	// Modal

	$('.modal__close').on('click', function() {
		$('#thanks, .overlay').fadeOut('slow');
	});



	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input, textarea").val("");
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

	new WOW().init();

});

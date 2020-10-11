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

	$('input[name=phone]').mask("+9 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

});

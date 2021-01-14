$(document).ready(function () {
	$('.hamburger').click(function (event) { 
		$('.hamburger, .hamburger__text').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

(function ($) {
	// SMOOTH SCROLL TO ANCHORS
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				//setTimeout(function(){	
				$('html,body').animate({
					scrollTop: target.offset().top
				},
				500);
				return false;
			}
		}
	});
	
	var bodyOverlay = $('.bg-overlay'),
		hamburgerClose = $('.hamburger-close'),
		menuItem = $('.mobile-nav-container ~ .menu li a'),
		closeMenu = bodyOverlay.add(hamburgerClose);
	
	// HAMBURGER ICON ANIMATION
	$('.hamburger').on('click touch', function() {
		$('.hamburger, body').toggleClass('is-active');
		bodyOverlay.fadeToggle();
	});
	
	//if (window.matchMedia("(max-width: 64em)").matches) {
	if ( $('.desktop').css('left') == 'auto' ) {
		menuItem.click(function() {
			$('.hamburger, body').toggleClass('is-active');
			bodyOverlay.fadeToggle();
		});
	}
	
	closeMenu.on('click touch', function() {
		$('.hamburger, body').toggleClass('is-active');
		bodyOverlay.fadeToggle();
	});
	
	// HAMBURGER VERTICAL ALIGN
	function hamburgerIcon() {
		$('.hamburger').css('height', $('#main-header').height());
	}
	
	$(document).ready(function () {
		hamburgerIcon();
		//bodyOverlayHeight();
	});
	
	$(window).resize(function () {
		hamburgerIcon();
		//bodyOverlayHeight();
	});
	
})(jQuery);

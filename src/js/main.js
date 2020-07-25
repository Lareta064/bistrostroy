$(document).ready(function () {
	const bodyElement = document.querySelector('body');
	const overlay = document.querySelector('#overlay');
	// показать строку поиска в шапке
	const buttonShowSearchForm = document.querySelector('.search-block');
	const buttonIconSearch = buttonShowSearchForm.querySelector('.search-ic');
	const buttonIconTimes = buttonShowSearchForm.querySelector('.times-ic');
	const headerSearchForm = document.querySelector('.search-form-wrapper');
	buttonShowSearchForm.addEventListener('click', function () {
		if (headerSearchForm.classList.contains('active')) {
			headerSearchForm.classList.remove('active');
			buttonIconTimes.classList.remove('active');
			buttonIconSearch.classList.add('active');

		} else {
			headerSearchForm.classList.add('active');
			buttonIconTimes.classList.add('active');
			buttonIconSearch.classList.remove('active');
		}
	})
	//зафиксировать шапку при скролле
	const fixHeaderDesktop = document.querySelector('.fix-header');
	const fixHeaderMobile = document.querySelector('.header-fixed-mobile');

	window.addEventListener('scroll', function () {
		if (window.innerWidth > 991) {
			if (window.scrollY > 150) {
				fixHeaderDesktop.classList.add('active');
			} else {
				fixHeaderDesktop.classList.remove('active');
			}
		}
		if (window.innerWidth < 991) {
			if (window.scrollY > 100) {
				fixHeaderMobile.classList.add('active');
			} else {
				fixHeaderMobile.classList.remove('active');
			}
		}
	});

	//Показать мобильное меню
	const showMobMenu = document.querySelector('.header-top .menu-toggle');
	const showMobMenu2 = document.querySelector('.header-fixed-mobile .menu-toggle');
	const hideMobMenu = document.querySelector('.close-mobMenu');
	const mobMenu = document.querySelector('.header-nav');
	const mobMenuSearchForm = document.querySelector('.search-form-wrapper input')

	function showMobileMenu() {
		mobMenu.classList.add('active');
		overlay.classList.add('active');
		bodyElement.classList.add('noscroll');
	}

	showMobMenu.addEventListener('click', function () {
		showMobileMenu();
	})
	showMobMenu2.addEventListener('click', function () {
		showMobileMenu();
	})
	//Скрыть мобильное меню
	function hideMobileMenu() {
		mobMenu.classList.remove('active');
		overlay.classList.remove('active');
		bodyElement.classList.remove('noscroll');
	}

	hideMobMenu.addEventListener('click', function () {
		hideMobileMenu();
	});

	//Скрыть мобильное меню  по клику вне меню

	bodyElement.addEventListener('click', function (e) {
		e.stopImmediatePropagation;
		if (mobMenu.classList.contains('active')) {
			if (e.target != showMobMenu && e.target != showMobMenu2 && e.target != mobMenuSearchForm) {
				hideMobileMenu();
			}

		}
	});

	//Скрыть мобильное меню  при ресайзе экрана

	window.addEventListener('resize', function () {
		hideMobileMenu();

	});
	//аккордеон развернуть стрелку
	$('.collapsable').on('show.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.addClass("rotate");
	});
	$('.collapsable').on('hide.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.removeClass("rotate");
	});

	$('.clients-logo').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		dotsSpeed: 800,
		smartSpeed: 800,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,

		responsive: {
			425: {
				items: 2
			},
			767: {
				items: 3
			}
		}
	});

	// маска для телефона
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input.phone').click(function () {
		$(this).setCursorPosition(3); // set position number
	});
	/*---ПОКАЗАТЬ ВОСКЛИЦАТЕЛЬНЫЙ ЗНАК В ИНПУТЕ */
	const checkboxGroup = document.querySelectorAll('label.form-label');
	const requiredInputs = document.querySelectorAll('.form-group  input[type="text"]');
	const textareaElement = document.querySelector('.form-group textarea');
	for (let item of requiredInputs) {
		//по клику в текстовый инпут убираем восклиц знак и активируем плейсхолдер
		const thisParent = item.closest('.form-group');
		item.addEventListener('focus', function () {
			thisParent.classList.remove('error');
			thisParent.querySelector('.fake-placeholder').classList.add('active');

		});
		//по блюру у пустого инпута деактивируем плейсхолдер
		item.addEventListener('blur', function () {
			if (this.value.length == 0) {
				thisParent.querySelector('.fake-placeholder').classList.remove('active');
			}
		})
	}

	/*ВАЛИДАЦИЯ ФОРМЫ */
	$("#contact-form").on('submit', function (event) {
		event.preventDefault();

		let success = false;

		for (let item of requiredInputs) {
			const thisParent = item.closest('.form-group');

			if (item.value.length == 0) {
				thisParent.classList.add('error');
				success = false;

			} else {
				success = true;
			}
		}
	});



})
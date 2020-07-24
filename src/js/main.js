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

	})

})
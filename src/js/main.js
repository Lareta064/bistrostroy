$(document).ready(function () {

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
})
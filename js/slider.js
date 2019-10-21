var pressed = false;
var intervalTime = 3000;

function setPressedFalseAgain() {
	pressed = false;
}
document.querySelector('.prev').addEventListener('click', function() {
	pressed = true;
	setTimeout(()=>setPressedFalseAgain(), 10000);
});
document.querySelector('.next').addEventListener('click', function() {
	pressed = true;
	setTimeout(()=>setPressedFalseAgain(), 10000);
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
	var i;
	const slides = document.getElementsByClassName('slider__image');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';
}
const timerId = () => setInterval(() => checkPress(), intervalTime);

function checkPress() {
	if (!pressed) {
		plusSlide();		
	}
}
timerId();

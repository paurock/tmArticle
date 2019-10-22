var pressed = false;
var ahead = true;
var intervalTime = 3000;
 

function setPressedFalseAgain() {
	pressed = false;
}
document.querySelector('.prev').addEventListener('click', function() {
	pressed = true;
	ahead = false;
	 
});
document.querySelector('.next').addEventListener('click', function() {
	pressed = true;
	ahead = true;
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;

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

showSlides(slideIndex);

//Slidewhow
const timerId = () => setInterval(() => checkPress(), intervalTime);

//Stop for 10 sec if pressed next or prev
function checkPress() {
	if (!pressed) {
		if (ahead) {
			plusSlide();
			console.log("plus slide")
		} else {
			minusSlide();
			console.log("minus slide")
		}
	} else {
		if (pressed) {
		setTimeout(() => setPressedFalseAgain(), 10000);
		}
	console.log("wait 10 sec")
	}
}
timerId();

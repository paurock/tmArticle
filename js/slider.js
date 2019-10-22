var pressed = false;
var ahead = true;
var intervalTime = 3000;
var counter = 0;
 

function setPressedFalseAgain() {
	pressed = false;
}

/* Индекс слайда по умолчанию */
var slideIndex = 1;

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	counter=0;
	showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	counter=0;
	showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides((slideIndex = n));
}

document.querySelector('.prev').addEventListener('click', function() {
	pressed = true;
	ahead = false;
	plusSlide()
});
document.querySelector('.next').addEventListener('click', function() {
	pressed = true;
	ahead = true;
	minusSlide()
});

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
 
//Stop for some time if pressed next or prev
function checkPress() {
	if (!pressed) {		 
		if (ahead) {
			plusSlide();
			console.log('plus slide');
		} else {
			minusSlide();
			console.log('minus slide');
		}
	} else {
		counter+=1;		 
		if (counter>5) {
			setPressedFalseAgain();
			counter=0;
		}
		console.log('wait sec' + counter);
	}
}
//Slidewhow
const timerId = function () {
	setInterval(function () {checkPress()}, intervalTime);
}
timerId();

const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];



const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".text-image");
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
let currentSlide = 0;


right.addEventListener("click", () => {
	currentSlide++;
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	changeSlide();
});



left.addEventListener("click", () => {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	changeSlide();
});



slides.forEach((slide, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === currentSlide) {
		dot.classList.add("dot_selected");
	}
	dot.addEventListener("click", () => {
		currentSlide = index;
		changeSlide();
	});
	dotsContainer.appendChild(dot);
});



function changeSlide() {
	bannerImg.src = slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateDots();
}



function updateDots() {
	const allDots = document.querySelectorAll(".dot");
	allDots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentSlide);
	});
}

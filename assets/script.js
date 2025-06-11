// Tableau des slides avec image + texte HTML
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




// Sélection des éléments HTML à manipuler
const bannerImg = document.querySelector(".banner-img"); // image du carrousel
const bannerText = document.querySelector(".text-image"); // texte affiché
const left = document.querySelector(".arrow_left"); // flèche gauche
const right = document.querySelector(".arrow_right"); // flèche droite
const dotsContainer = document.querySelector(".dots"); // conteneur des points
let currentSlide = 0; // index de la slide affichée (commence à 0)





// Quand on clique sur la flèche droite
right.addEventListener("click", () => {
	currentSlide++; // on passe à la slide suivante
	if (currentSlide > slides.length - 1) {
		currentSlide = 0; // si on dépasse, on revient au début
	}
	changeSlide(); // mise à jour de l’image, du texte et des points
});



// Quand on clique sur la flèche gauche
left.addEventListener("click", () => {
	currentSlide--; // on va à la slide précédente
	if (currentSlide < 0) {
		currentSlide = slides.length - 1; // si on est avant la première, on va à la dernière
	}
	changeSlide(); // mise à jour de l’image, du texte et des points
});



// Création des points (dots) pour chaque slide
slides.forEach((slide, index) => {
	const dot = document.createElement("div"); // on crée un point
	dot.classList.add("dot"); // on lui donne la classe CSS
	if (index === currentSlide) {
		dot.classList.add("dot_selected"); // on met en surbrillance le point actif
	}
	dot.addEventListener("click", () => {
		currentSlide = index; // on va directement à la slide cliquée
		changeSlide(); // mise à jour du carrousel
	});
	dotsContainer.appendChild(dot); // on ajoute le point dans le HTML
});



// Fonction qui change l’image, le texte et les points
function changeSlide() {
	bannerImg.src = slides[currentSlide].image; // affiche la bonne image
	bannerText.innerHTML = slides[currentSlide].tagLine; // affiche le bon texte
	updateDots(); // met à jour les points
}


// Fonction qui met à jour les points (dot_selected)
function updateDots() {
	const allDots = document.querySelectorAll(".dot"); // récupère tous les points
	allDots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentSlide); // active uniquement le point actuel
	});
}

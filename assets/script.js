
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// 1) Les écouteurs d'événements sur les flèches //

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


// 2) Ajout des points sous le slide // 

const dotsContainer = document.getElementById('dots-container');
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Ajout la class "dot_selected" pour la première diapo //
        if (index === 0) {
            dot.classList.add('dot_selected');
        }

        dot.addEventListener('click', function () {
            console.log('Clic sur le point ' + (index + 1));

			//Gestion des points cliquables + axe d'amélioration
			updateSlide(index); 

            // Retire la class 'dot_selected' de tous les points
            document.querySelectorAll('.dot').forEach(dot => {
                dot.classList.remove('dot_selected');
            });

            // Ajoute la class 'dot_selected' sur le point cliqué
            dot.classList.add('dot_selected');
        });

        dotsContainer.appendChild(dot);
    });


// 3) Ajout des images dynamiques 

let currentIndex = 0; // Indice de la 1er Slide

const DotsContainer = document.querySelector('#dots-container');
const ArrowLeft = document.querySelector('.arrow_left');
const ArrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');

// Fonction pour MAJ la diapo //

function updateSlide(index) {
	// MAJ de l'image dans le slide
	bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;

	//MAJ du texte de l'image l'ID #banner + p
	tagLine.innerHTML = slides[index].tagLine;

	// MAJ du point actif
	document.querySelectorAll('.dot').forEach((dot, dotIndex) => {
		dot.classList.toggle('dot_selected', dotIndex === index);
	});
}

// Écouteur d'événement pour la flèche droite au clic
ArrowRight.addEventListener('click', function () {
	console.log('Clic sur la flèche droite');
	currentIndex = (currentIndex + 1) % slides.length; // Passer à la diapositive suivante +1.length
	updateSlide(currentIndex);
});

// Écouteur d'événement pour la flèche gauche au clic
ArrowLeft.addEventListener('click', function () {
	console.log('Clic sur la flèche gauche');
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Passer à la diapositive précédente -1.length
	updateSlide(currentIndex);
});

// Initialiser la première diapositive
updateSlide(currentIndex);

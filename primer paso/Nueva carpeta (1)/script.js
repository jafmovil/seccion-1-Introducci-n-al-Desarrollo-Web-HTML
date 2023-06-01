var toggleButton = document.getElementById('toggleButton');
var imageSlider = document.getElementById('imageSlider');
var imageGallery = document.getElementById('imageGallery');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

var images = [
    "ruta-a-imagen-1.jpg",
    "ruta-a-imagen-2.jpg",
    "ruta-a-imagen-3.jpg",
    "ruta-a-imagen-4.jpg"
];
var currentImageIndex = 0;

toggleButton.addEventListener('click', function() {
    if (imageSlider.style.display === "none") {
        imageSlider.style.display = "block";
        imageGallery.style.display = "none";
        toggleButton.textContent = "Ver vista galería de imágenes";
    } else {
        imageSlider.style.display = "none";
        imageGallery.style.display = "block";
        toggleButton.textContent = "Ver vista deslizador de imágenes";
    }
});

prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    var img = imageSlider.querySelector('.img');
    img.src = images[currentImageIndex];
});

nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    var img = imageSlider.querySelector('.img');
    img.src = images[currentImageIndex];
});
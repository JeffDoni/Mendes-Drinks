let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByTagName("img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  // Verifica se o slideIndex foi reiniciado para 1
  if (slideIndex === 1) {
    slides[slides.length - 1].style.display = "none";
    slides[0].style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

setInterval(function() {
  plusSlides(1);
}, 2500);



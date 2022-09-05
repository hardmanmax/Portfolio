const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  // console.log(`project${slideIndex}`);

  const currentSlide = `.project${slideIndex}`;
  console.log(currentSlide);
  document.querySelector(`${currentSlide}`).classList.remove("hidden");

}

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.removeProperty('overflow');
}

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  
  console.log(slideIndex);
}

for (let i=0; i<btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
})
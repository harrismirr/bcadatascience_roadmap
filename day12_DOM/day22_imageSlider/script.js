const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4"
];

let index = 0;
let autoSlide;
let isPaused = false;

const slide = document.getElementById("slide");
const dotsContainer = document.getElementById("dots");

images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  index = i;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 300);

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

function pauseAutoSlide() {
  clearInterval(autoSlide);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

document.getElementById("pause").addEventListener("click", () => {
  if (isPaused) {
    startAutoSlide();
    isPaused = false;
    document.getElementById("pause").textContent = "⏸ Pause";
  } else {
    pauseAutoSlide();
    isPaused = true;
    document.getElementById("pause").textContent = "▶ Resume";
  }
});

startAutoSlide();
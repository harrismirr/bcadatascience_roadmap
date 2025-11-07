// Select main elements
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// When image in gallery is clicked
gallery.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    lightbox.style.display = "flex";
    lightboxImg.src = event.target.src;
  }
});

// Close lightbox when × clicked
closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Close lightbox when background clicked
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
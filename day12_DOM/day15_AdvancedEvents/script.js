document.querySelector(".outer").addEventListener("click", () => {
  alert("Outer Div Clicked!");
});

document.querySelector(".inner").addEventListener("click", () => {
  alert("Inner Div Clicked!");
});

document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});

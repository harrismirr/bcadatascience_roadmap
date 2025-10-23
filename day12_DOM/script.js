let container = document.getElementById("container");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function() {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
});

removeBtn.addEventListener("click", function() {
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
function addElement() {
  const container = document.getElementById("container");
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph!";
  container.appendChild(newPara);
}

function removeElement() {
  const container = document.getElementById("container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  } else {
    alert("No more paragraphs to remove!");
  }
}
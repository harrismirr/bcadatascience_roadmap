const parentList = document.getElementById("parentList");
const cloneBtn = document.getElementById("cloneBtn");

// 🔹 Access parent element
console.log("Parent of UL:", parentList.parentElement);

// 🔹 Access all children
console.log("Children of UL:", parentList.children);

// 🔹 Access next & previous sibling
console.log("Next sibling:", parentList.nextElementSibling);
console.log("Previous sibling:", parentList.previousElementSibling);

// 🔹 Clone the element
cloneBtn.addEventListener("click", () => {
  const clone = parentList.cloneNode(true); // true = clone with child nodes
  document.body.appendChild(clone);
});

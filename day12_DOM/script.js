// Selecting elements
let heading=
document.getElementByld("main-heading"
);
let para = document.querySelector(".info");
let button = 
document.querySelector("#btn");

// Changing text
heading.textContent = "Hello Harris!";
para.textContent = "This text was changed with JavaScript!";

//Button action
button.addEventListener("click", function()
{
    heading.textContent = "Button was clicked!";
    heading.style.color = "red";
});


//Create form dynamically
let formContainer = document.getElementById("form-container");

let form = document.createElement("form");

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";

let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";

// Add everything to form
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitBtn);

// Add form to page
formContainer.appendChild(form);

let dataList = document.getElementById("data-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  if (name && email) {
    let listItem = document.createElement("li");
    listItem.textContent = `Name: ${name} | Email: ${email}`;
    dataList.appendChild(listItem);

    // Reset form
    form.reset();
  } else {
    alert("Please fill all fields!");
  }
});
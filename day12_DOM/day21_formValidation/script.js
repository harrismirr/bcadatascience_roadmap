const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

function validateForm() {
  let valid = true;

  // Username check
  if (username.value.length < 3) {
    userError.textContent = "Username must be at least 3 characters";
    valid = false;
  } else {
    userError.textContent = "";
  }

  // Email check
  if (!email.value.includes("@")) {
    emailError.textContent = "Invalid email address";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password check
  if (password.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passError.textContent = "";
  }

  // Button enable/disable
  submitBtn.disabled = !valid;
}

// Event listeners for input
username.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

// On submit
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
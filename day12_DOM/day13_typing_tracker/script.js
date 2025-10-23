let inputBox = document.getElementById("typingInput");
let display = document.getElementById("displayText");

inputBox.addEventListener("keyup", function() {
  let text = inputBox.value.trim();
  if (text === "") {
    display.textContent = "You are typing:";
  } else {
    display.textContent = "You are typing: " + text;
  }
});

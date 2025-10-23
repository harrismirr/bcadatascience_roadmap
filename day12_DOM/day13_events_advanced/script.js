let box =
document.getElementById("colorBox");
let input =
document.getElementById("textInput");

box.addEventListener("mouseover",
function() {
    box.style.backgroundColor = "orange";
    box.textContent = "Mouse is over me!";
    });

    box.addEventListener("mouseout",
        function() {
            box.style.backgroundColor = "lightgray",
            box.textContent = "Hover me!";
        });

    input.addEventListener("keydown",
        function(event){
            console.log("key pressed:",event.key);
        });
    input.addEventListener("keyup",
        function(event){
            console.log("key released:",event.key);
        });
        
let redButton =
document.getElementById("redBtn");
let greenButton =
document.getElementById("greenBtn");
let blueButton =
document.getElementById("blueBtn");

redButton.addEventListener("click",
    function() {
        document.body.style.backgroundColor=
        "red";
    });

    greenButton.addEventListener("click",
        function() {
            document.body.style.background =
            "green";
        });

    blueButton.addEventListener("click",
        function() {
            document.body.style.backgroundColor=
            "blue";
        });

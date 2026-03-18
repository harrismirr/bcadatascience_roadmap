document.getElementById("btn").addEventListener("click", getJoke);

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " 😂\n\n" + data.punchline;
        })
        .catch(error => {
            document.getElementById("joke").innerText = "Error loading joke 😔";
        });
}
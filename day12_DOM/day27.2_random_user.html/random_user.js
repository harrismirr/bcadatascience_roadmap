document.getElementById("btn").addEventListener("click", getUser);

function getUser() {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            let user = data.results[0];

            document.getElementById("photo").src = user.picture.large;
            document.getElementById("name").innerText = user.name.first + " " + user.name.last;
            document.getElementById("email").innerText = "📧 " + user.email;
            document.getElementById("phone").innerText = "📞 " + user.phone;
            document.getElementById("country").innerText = "🌍 " + user.location.country;
        });
}
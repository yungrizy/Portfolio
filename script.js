let nameElement = document.getElementById("name")
let greetButton = document.getElementById("greetButton")


greetButton.addEventListener("click", function() {
    nameElement.textContent = "Welcome to my portfolio!"
});

let visitorName = document.getElementById("visitorName")
let messageElement = document.getElementById("greetingMessage")

visitorName.addEventListener("input", function() {
    if (visitorName.value.trim() !== "") {
        messageElement.textContent = "Hello, " + visitorName.value + "!"
    } else {
        messageElement.textContent = "Enter your name to get a greeting"
    }
})



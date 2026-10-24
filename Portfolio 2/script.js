
let heading = document.getElementById("heading");
let changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function() {
    heading.textContent = "Heading Changed!";
});


let visitorName = document.getElementById("VisitorName");
let message = document.getElementById("message");

visitorName.addEventListener("input", function() {
    if (visitorName.value.trim() === "") {
        message.textContent = "Please enter your name";
    } else {
        message.textContent = "Hello " + visitorName.value.trim() + "!";
    }
});


let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


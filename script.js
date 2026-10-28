//Strings
let greeting = "Welcome to my portfolio website!"
let name = "Ian Moses Kitavi"
let profession = "Systems Integration Specialist"
console.log(name)
console.log(profession)
console.log(greeting)

//Boolean
let isStudent = true
console.log(isStudent)
let isWorking = true
console.log(isWorking)

//Objects

let person = {
    name: "Ian Moses Kitavi",
    profession: "Systems Integration Specialist",
    isStudent: true,
    isWorking: true
}

console.log(person)

//Functions
function greet() {
    console.log("Hello, " + name + "!")
}
greet()

//Arrays
const skills = ["Systems Integration", "Technical Support", "Problem Solving", "Communication and Collaboration"]
console.log(skills)
const projects = ["Merchants Integration & Onboarding", "Wallet & Payment API Integration", "M-Pesa Daraja API Integration", "API Testing & UAT Automation"]
console.log(projects)

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

let themeToggle = document.getElementById("theme-toggle")
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode")
})



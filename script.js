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
const portfolioProjects = ["Merchants Integration & Onboarding", "Wallet & Payment API Integration", "M-Pesa Daraja API Integration", "API Testing & UAT Automation"]
console.log(portfolioProjects)

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

const projectForm = document.getElementById("projectForm");
const projectInput = document.getElementById("projectInput");
const projectList = document.getElementById("projectList");
const emptyMessage = document.getElementById("emptyMessage");
const projectError = document.getElementById("projectError");

let userProjects = [];



function createProjectItem(projectName) {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = projectName;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);

    projectList.appendChild(li);

    return { li, nameSpan, deleteBtn };
}



function renderProjects() {
    projectList.innerHTML = "";

    if (userProjects.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    userProjects.forEach(function(project) {
        createProjectItem(project);
    });
}


function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(userProjects));
}

function loadProjects() {
    const saved = localStorage.getItem("projects");

    if (saved) {
        userProjects = JSON.parse(saved);
    }

    renderProjects();
}

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = projectInput.value.trim();

  if (name === "") {
    projectError.textContent = "Please enter a project name";
    return;
  }

  projectError.textContent = "";

  userProjects.push(name);
  saveProjects();
  renderProjects();

  projectInput.value = "";
  projectInput.focus();

});


projectList.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-btn")){
     const li = event.target.parentElement;
     const index = Array.from(projectList.children).indexOf(li);
     
     userProjects.splice(index, 1);
     saveProjects();
     renderProjects();
    }
});

loadProjects();


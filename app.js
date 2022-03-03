const nameInput = document.querySelector("#name")
const zipInput= document.querySelector("#zip")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const passwordInput = document.querySelector("#password")
nameInput.addEventListener("input" , validateName)
zipInput.addEventListener("input",validateZipCode)
emailInput.addEventListener("input",validateEmail)
phoneInput.addEventListener("input",validatePhone)
passwordInput.addEventListener("input",validatePassword)

function validateName() {
    const name = nameInput.value
    const nameRegex = /^[A-Z]{1}[a-zA-Z]{1,9}$/
    
    if (nameRegex.test(name)) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
    }
    else{
        nameInput.classList.remove("is-valid")
        nameInput.classList.add("is-invalid")  
    }
}
function validateZipCode() {
    const zip = zipInput.value
    const zipRegex = /^[0-9]{3}[-\s]?[0-9]{3}$/
    
    if (zipRegex.test(zip)) {
        zipInput.classList.add("is-valid")
        zipInput.classList.remove("is-invalid")
    }
    else{
        zipInput.classList.remove("is-valid")
        zipInput.classList.add("is-invalid")  
    }
}
function validateEmail() {
    const email = emailInput.value
    const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (emailRegex.test(email)) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
    }
    else{
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")  
    }
}
function validatePhone() {
    const phone = phoneInput.value
    const phoneRegex =/^\+?998\s?[3789]{1}[013456789]{1}[0-9]{7}$/
    
    if (phoneRegex.test(phone)) {
        phoneInput.classList.add("is-valid")
        phoneInput.classList.remove("is-invalid")
    }
    else{
        phoneInput.classList.remove("is-valid")
        phoneInput.classList.add("is-invalid")  
    }
}
function validatePassword() {
    const password = passwordInput.value
    const passwordRegex =/^[A-Z]{1}([A-Za-z0-9]{1,}){7,14}[\W]{1}$/
    
    if (passwordRegex.test(password)) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
    }
    else{
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")  
    }
}

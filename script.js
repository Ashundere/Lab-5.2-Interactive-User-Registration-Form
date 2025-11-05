

const usernameInput = document.getElementById("username")
const usernameError = document.getElementById("usernameError")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("emailError")
const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("passwordError")
const confirmPasswordInput = document.getElementById("confirmPassword")
const confirmPasswordError = document.getElementById("confirmPasswordError")
const submitBtn = document.getElementById("submitBtn")
const regForm = document.getElementById("registrationForm")


submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    if (regForm.checkValidity()){
        localStorage.setItem('username', usernameInput.value)
        alert("Form submitted successfully!")
    } else{
    if (!usernameInput.validity.valid) {
      usernameError.textContent = 'Please enter your username.'
      usernameInput.focus();
    } else{
        usernameError.textContent = ""
    }
    if (!emailInput.validity.valid) {
      emailError.textContent = 'Please enter a valid email.'
      emailInput.focus()
    }   else{
        emailError.textContent = ""
    }
    if (!passwordInput.validity.valid) {
      passwordError.textContent = 'Password must be a minimum of 8 characters!.'
      passwordInput.focus();
    } else{
        passwordError.textContent = ""
    }
    if (confirmPasswordInput.value != passwordInput.value) {
      confirmPasswordError.textContent = 'Passwords must match!'
      confirmPasswordInput.focus();
    } else{
        confirmPasswordError.textContent = ""
    }
    }
})

window.addEventListener("load", function(event){
    let user;
    try {
        user = localStorage.getItem('username') 
    } catch (error) {
        console.log("Failed to retrieve username", error)
        user = null;
    }
    usernameInput.value = user
})
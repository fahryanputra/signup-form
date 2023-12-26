const confirmPassword = document.querySelector(".password-confirmation");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
    const passwordInput = document.getElementById("password");
    const confirmationInput = document.getElementById("confirm-password");

    if(passwordInput.value !== confirmationInput.value) {
        event.preventDefault();
        passwordInput.setAttribute("class", "error");
        confirmationInput.setAttribute("class", "error");
        confirmPassword.textContent = "*The password do not match";
        return false;
    }
})
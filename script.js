const confirmPassword = document.querySelector(".password-confirmation");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
    const passwordInput = document.getElementById("password").value;
    const confirmationInput = document.getElementById("confirm-password").value;

    if(passwordInput !== confirmationInput) {
        event.preventDefault();
        confirmPassword.textContent = "The password do not match!";
        return false;
    }
})
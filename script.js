const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    const emailPattern = /.+@.+\..+/;

    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        isValid = false;
    } 
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});
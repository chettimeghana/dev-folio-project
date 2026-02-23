// Select form
const form = document.getElementById("contactForm");

// Submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name check
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    // Email check
    const emailPattern = /.+@.+\..+/;

    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Message check
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        isValid = false;
    }

    // Success
    if (isValid) {
    console.log("Form submitted successfully!");
    form.reset(); // clears form
}
});
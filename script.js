console.log("JS Connected");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit button clicked");
});
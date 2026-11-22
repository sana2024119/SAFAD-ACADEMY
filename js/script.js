const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Thank you! Your registration has been received.";

    formMessage.style.color = "#556B2F";

    registrationForm.reset();
  });
}

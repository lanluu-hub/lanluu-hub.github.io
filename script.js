const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // validation
  let valid = true;
});

const showError = (fieldId, message) => {
  const field = document.getElementById(fieldId);
  field.classList.add("is-invalid");
  let error = field.parentElement.querySelector(".invalid-feedback");
  if (!error) {
    error = document.createElement("div");
    error.classList.add("invalid-feedback");
    field.parentElement.appendChild(error);
  }
  error.textContent = message;
};

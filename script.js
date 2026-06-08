const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // validation
  let valid = true;

  // Regular expression for email validation as per HTML specification
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  if (name === "") {
    showError("name", "Name field cannot be empty!");
    valid = false;
  } else {
    clearError("name");
  }

  if (email === "" || !emailRegExp.test(email)) {
    showError("email", "Please enter a valid email address.");
    valid = false;
  } else {
    clearError("email");
  }

  if (message === "" || message.length < 20) {
    showError("message", "Message must be at least 20 characters.");
    valid = false;
  } else {
    clearError("message");
  }

  if (!valid) return;

  // Submit to Formspree
  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (response.ok) {
      feedback.textContent = "Message sent. I'll get back to you soon.";
      feedback.style.color = "var(--color-accent)";
      form.reset();
    } else {
      feedback.textContent = "Something went wrong. Please try again.";
      feedback.style.color = "#e05c5c";
    }
  } catch (error) {
    feedback.textContent = "Network error. Please try again.";
    feedback.style.color = "#e05c5c";
  }
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

const clearError = (fieldId) => {
  const field = document.getElementById(fieldId);
  field.classList.remove("is-invalid");
  const error = field.parentElement.querySelector(".invalid-feedback");
  if (error) error.textContent = "";
};

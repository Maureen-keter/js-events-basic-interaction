// Toggle theme feature
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Live text feedback feature
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", () => {
  liveOutput.textContent = `You typed: ${liveInput.value}`;
});

// Custom form validation
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  // Custom validation rules
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters long.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.textContent = errors.join(" ");
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
    form.reset();
  }
});

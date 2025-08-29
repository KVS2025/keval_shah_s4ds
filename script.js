document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  const successMsg = document.createElement("p");
  successMsg.textContent = "✅ Thank you! Your message has been submitted.";
  successMsg.style.color = "green";

  const form = document.getElementById("contactForm");
  form.appendChild(successMsg);

  form.reset();
});

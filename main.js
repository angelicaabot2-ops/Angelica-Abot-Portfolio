// main.js

// ===== Dark Mode Toggle =====
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#2563eb";
toggleBtn.style.color = "#fff";
toggleBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,.2)";
document.body.appendChild(toggleBtn);

let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.background = "#111827";
    document.body.style.color = "#f3f4f6";
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.style.background = "#f3f4f6";
    document.body.style.color = "#111827";
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// ===== Button Hover Effect (ripple) =====
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
    circle.style.top = e.clientY - this.offsetTop - d / 2 + "px";

    setTimeout(() => circle.remove(), 600);
  });
});

// ===== Simple Form Validation (if you have a form) =====
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#2563eb";
      }
    });

    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}


// Redirect for Find Parking button
const findBtn = document.getElementById("findBtn");
if (findBtn) {
  findBtn.addEventListener("click", () => {
    // Check if logged in
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      window.location.href = "find.html";
    } else {
      alert("Please login first to find parking!");
      window.location.href = "login.html";
    }
  });
}

// Signup Logic
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! You can now login.");
      window.location.href = "login.html";
    } else {
      alert("Please fill in all fields!");
    }
  });
}

// Login Logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful! Redirecting...");
      localStorage.setItem("loggedInUser", email);
      window.location.href = "find.html";
    } else {
      alert("Invalid email or password!");
    }
  });
}

// Logout Logic
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });
}
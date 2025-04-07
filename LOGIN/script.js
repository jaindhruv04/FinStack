const signinBtn = document.getElementById("show-signin");
const signupBtn = document.getElementById("show-signup");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

signinBtn.onclick = () => {
  signinBtn.classList.add("active");
  signupBtn.classList.remove("active");
  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

signupBtn.onclick = () => {
  signupBtn.classList.add("active");
  signinBtn.classList.remove("active");
  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");
};

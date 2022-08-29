var signin_form = document.querySelector(".signin-form");
var signup_btn = document.querySelector(".signupBtn");
var signin_btn = document.querySelector(".signinBtn");
var signup_panel = document.querySelector(".signup-panel");
var signin_panel = document.querySelector(".signin-panel");
var signup_form = document.querySelector(".signup-form");

signup_btn.addEventListener("click", function () {
  signin_form.classList.toggle("active");
  signup_panel.classList.toggle("active");
  signin_panel.classList.toggle("active");
  signup_form.classList.toggle("active");
});
signin_btn.addEventListener("click", function () {
  signin_form.classList.toggle("active");
  signup_panel.classList.toggle("active");
  signin_panel.classList.toggle("active");
  signup_form.classList.toggle("active");
});

/* -------------------------------------------------------------------------- */
var eye_icon = document.querySelector(".password-eye");
var eye_icon_show = document.querySelector(".password-eye-show");

eye_icon.addEventListener("click", function () {
  eye_icon_show.classList.toggle("active");
  eye_icon.classList.toggle("active");
});
eye_icon_show.addEventListener("click", function () {
  eye_icon_show.classList.toggle("active");
  eye_icon.classList.toggle("active");
});
/* -------------------------------------------------------------------------- */
var signup_phone = document.querySelector(".new-here");

signup_phone.addEventListener("click", function () {
  signup_form.classList.toggle("active");
  signin_form.classList.toggle("active");
});

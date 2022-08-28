/* ---------------------------- left navbar icon ---------------------------- */
var hamburger = document.querySelector(".hamburger");
var leftnav = document.querySelector(".navLeft");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  leftnav.classList.toggle("active");
});

document.querySelectorAll("leftnav").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    leftnav.classList.remove("active");
  })
);

var navbarIcon = document.querySelector(".navbar-icon-open");
var profile = document.querySelector(".profile");
var navbarul = document.querySelector(".navbar ul li:nth-child(n+2)");

navbarIcon.addEventListener("click", function () {
  profile.classList.toggle("active");
  navbarul.classList.toggle("active");
});

var searchicon = document.querySelector(".search-icon");
var searchbar = document.querySelector("searchBar");

searchicon.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  
});
/* -------------------------------- dark mode ------------------------------- */
var darkModeBtn = document.querySelector(".checkbox");

darkModeBtn.onclick = function () {
  if (this.checked == true) {
    darkMode();
  } else if (this.checked == false) {
    normalMode();
  }
};

function darkMode() {
  document.querySelectorAll("p").forEach((e) => (e.style.color = "white"));
  document.querySelectorAll("a").forEach((e) => (e.style.color = "white"));
  document.querySelectorAll("i").forEach((e) => (e.style.color = "#4343ef"));

  document
    .querySelectorAll("h1 , h2 , h3 , h4 , h5 , h6, h7")
    .forEach((e) => (e.style.color = "#ffffff"));

  document
    .querySelectorAll(".middle")
    .forEach((e) => (e.style.backgroundColor = "#212121"));

  document
    .querySelectorAll(
      ".middle1,.middle2,.middle3Left,.middle3Right, .middle4, .middle5, .middle7 ,.middle8"
    )
    .forEach((e) => (e.style.backgroundColor = "#1c1c1c"));

  document
    .querySelectorAll(".middle6Container")
    .forEach((e) => (e.style.backgroundColor = "#1c1c1c"));

  document
    .querySelectorAll(".navLeft")
    .forEach(
      (e) => ((e.style.backgroundColor = "#212121"), (e.style.opacity = 0.9))
    );

  document
    .querySelectorAll(".navbar")
    .forEach(
      (e) => ((e.style.backgroundColor = "#212121"), (e.style.opacity = 0.9))
    );

  document
    .querySelectorAll("body")
    .forEach((e) => (e.style.backgroundColor = "#212121"));
  document
    .querySelectorAll(".rightMenu")
    .forEach((e) => (e.style.backgroundColor = "#212121"));
  document
    .querySelectorAll(".playerContainer")
    .forEach((e) => (e.style.backgroundColor = "#212121"));
}
function normalMode() {
  document.querySelectorAll("p").forEach((e) => (e.style.color = "#000000"));
  document.querySelectorAll("a").forEach((e) => (e.style.color = "#4d4d56"));
  document.querySelectorAll("i").forEach((e) => (e.style.color = "#4d4d56"));

  document
    .querySelectorAll("h1 , h2 , h3 , h4 , h5 , h6, h7")
    .forEach((e) => (e.style.color = "#000000"));

  document
    .querySelectorAll(".middle")
    .forEach((e) => (e.style.backgroundColor = "#f0f0f5c4"));

  document
    .querySelectorAll(
      ".middle1,.middle2,.middle3Left,.middle3Right, .middle4, .middle5, .middle7 ,.middle8"
    )
    .forEach((e) => (e.style.backgroundColor = "white"));

  document
    .querySelectorAll(".middle6Container")
    .forEach((e) => (e.style.backgroundColor = "white"));

  document
    .querySelectorAll(".navLeft")
    .forEach(
      (e) => ((e.style.backgroundColor = "white"), (e.style.opacity = 0.9))
    );

  document
    .querySelectorAll(".navbar")
    .forEach(
      (e) => ((e.style.backgroundColor = "white"), (e.style.opacity = 0.9))
    );

  document
    .querySelectorAll("body")
    .forEach((e) => (e.style.backgroundColor = "white"));
  document
    .querySelectorAll(".rightMenu")
    .forEach((e) => (e.style.backgroundColor = "white"));
  document
    .querySelectorAll(".playerContainer")
    .forEach((e) => (e.style.backgroundColor = "white"));

  document
    .querySelectorAll(".logo")
    .forEach((e) => (e.style.color = "#4343ef"));
  document
    .querySelectorAll(".fa-solid")
    .forEach((e) => (e.style.color = "#4343ef"));
}

/* ------------------------------- login page ------------------------------- */
// document.getElementsByTagName("navbar", function (data) {
//   $("#nav-placeholder").replaceWith(data);
// });



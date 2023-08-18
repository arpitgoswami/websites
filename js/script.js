// toggle icon navbar
let menuButton = document.querySelector("#nav");
let menuIcon = document.querySelector("#nav-icon");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
};

// typed JS
var typed = new Typed("#typed", {
  strings: [
    "PHILIP GILBERT",
    "Web Developer.",
    "React Developer.",
    "w3.0 Developer.",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

var typed = new Typed("#typed2", {
  strings: ["PERSONAL DETAILS", "Portofolio.", "My Bio.", "My Focus."],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

// scroll sections
let checkBox = document.getElementById("nav_check");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header li a");

window.onscroll = () => {
  // scroll close
  menuIcon.classList.remove("bx-x");
  checkBox.checked = false;

  // section change
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

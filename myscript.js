// HAMBURGER MENU TOGGLER
var bar = document.querySelector("#nav-bar");

bar.addEventListener("click", function (e) {
  if (bar.classList.contains("fa-bars")) {
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-times");
  } else {
    bar.classList.remove("fa-times");
    bar.classList.add("fa-bars");
  }
});

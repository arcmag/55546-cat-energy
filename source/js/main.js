document.querySelector(".main-nav--no-js").classList.remove("main-nav--no-js");

document.querySelector(".main-nav__btn").addEventListener("click", function () {
  document.querySelector(".main-nav").classList.toggle("main-nav--hidden-list");
});

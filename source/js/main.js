svg4everybody();
document.querySelector(".main-nav--no-js").classList.remove("main-nav--no-js");
document.querySelector(".footer-page__map--no-js").classList.remove("footer-page__map--no-js");

document.querySelector(".main-nav__btn").addEventListener("click", function () {
  document.querySelector(".main-nav").classList.toggle("main-nav--hidden-list");
});

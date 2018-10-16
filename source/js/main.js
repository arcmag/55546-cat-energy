document.querySelector(".main-nav--no-js").classList.remove("main-nav--no-js");

document.querySelector(".main-nav").addEventListener("click", function () {
  this.classList.toggle("main-nav--hidden-list");
});

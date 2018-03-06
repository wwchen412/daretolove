let navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function() {
  let headerH = document.querySelector(".nav-bar").clientHeight;
  let windowScrollOffset = window.pageYOffset;

  if (windowScrollOffset >= headerH) {
    navbar.classList.add("down");
  } else {
    navbar.classList.remove("down");
  }
});

$(function() {
  $("#menu").click(function() {
    console.log('menu');
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
  });
});

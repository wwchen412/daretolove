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

// 

$(function() {
   if ($.cookie("name") == null) {
     var _hostname = window.location.hostname; //取得網址

     $(".warning .btn-outline-success").click(function(){
         $.cookie("name", _hostname, { expires: 7, path: "/" });
         $.cookie("count", 1, { expires: 7, path: "/" });
     });
  
     window.location.href = "warning.html";
   } else {
     var _hostname = $.cookie("name");
     var _count = $.cookie("count");
     $.cookie("count", _count, { expires: 7, path: "/" });
     
   }

  $("#menu").click(function() {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
  });
});

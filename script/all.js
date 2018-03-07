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
     $.cookie("name", _hostname, { expires: 7, path: "/" });
     $.cookie("count", 1, { expires: 7, path: "/" });
     window.location.href = "warning.html";
   } else {
     var _hostname = $.cookie("name");
     var _count = $.cookie("count");
     // console.log("歡迎來到" + _hostname + "，你是第 " + (++_count) + " 次拜訪本小站。");
     // 把加 1 之後的 count 寫回記錄中
     $.cookie("count", _count, { expires: 7, path: "/" });
   }
  $("#menu").click(function() {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
  });
});

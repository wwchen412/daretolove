$(function() {
  $("#menu").click(function() {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
  });
  // 點劇照換照片
  $(".dramaPics li a").each(function() {
    $(this).click(function() {
      event.preventDefault();
      var imgSrc = $(this)
        .find("img")
        .attr("src");

      $("#picModal .modal-body img").attr("src", imgSrc);
      $("#picModal .downloadImg").attr("href", imgSrc);
    });
  });

  $(window).scroll(function() {
    $(".fadeIn").each(function() {
      // console.log(this);
      var itemHeight = $(this).outerHeight() / 2;
      // + $(this).outerHeight()
      var bottom_of_fadeIn = $(this).position().top + itemHeight;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_fadeIn) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});
// fb分享
$(".shareBtn").on("click", function() {
  event.preventDefault();
  FB.ui(
    {
      method: "share",
      mobile_iframe: true,
      href: "https://daretolove.wwmt.com.tw/daretolove/#movie"
    },
    function(response) {
      alert("分享完成！");
    }
  );
});

// movie光箱展開
var $location = window.location.href;
var $locationArray = $location.split("/");
var lastHash = $locationArray[$locationArray.length - 1];
console.log(lastHash);
if (lastHash == "#movie") {
  $("#movieModal").modal("show");
}

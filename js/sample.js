$(function () {
  // fullpage js
  $("#fullPage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);

  $(".btn").on({
    mouseenter: function () {
      $("#section2 .hidden_img").addClass("on");
    },
    mouseleave: function () {
      $("#section2 .hidden_img").removeClass("on");
    },
  });

  $(".menu-btn").click(function () {
    $(".menu-section").fadeToggle();
    $(".menu-btn").toggleClass("active");
  });
});

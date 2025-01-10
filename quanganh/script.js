$(document).ready(function () {
  // navbar mobile
  $(".js-show-navbar-mobile").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").toggleClass("active");
  });

  $(".closebtn,.js-hide-navbar-mobile,.overlay").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").removeClass("active");
  });
  // handle btn event
});

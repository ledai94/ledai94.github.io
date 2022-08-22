$(function () {
  //   $(".block-game-play__slideshow").slick({
  //     centerMode: true,
  //     centerPadding: "60px",
  //     slidesToShow: 3,
  //     arrows: true,
  //     // responsive: [
  //     //   {
  //     //     breakpoint: 768,
  //     //     settings: {
  //     //       arrows: false,
  //     //       centerMode: true,
  //     //       centerPadding: "40px",
  //     //       slidesToShow: 3,
  //     //     },
  //     //   },
  //     //   {
  //     //     breakpoint: 480,
  //     //     settings: {
  //     //       arrows: false,
  //     //       centerMode: true,
  //     //       centerPadding: "40px",
  //     //       slidesToShow: 1,
  //     //     },
  //     //   },
  //     // ],
  //   });
  //   $(".block-game-play__slideshow").slick({
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //   });
  //   $(".block-game-play__slideshow").slick({
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ],
  //   });
  $(".block-game-play__slideshow").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
});

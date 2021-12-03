// Navigator
(function ($) {
  $(function () {
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      $(".dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $("#nav-toggle").click(function () {
      // $("nav ul").slideToggle();
      // $("#navbar").addClass("open");
      $("nav").toggleClass("open");

      // $("#navbar").removeClass("open");
    });

    $("#close-button").click(function () {
      // $("nav ul").slideToggle();
      // $("#navbar").addClass("open");
      $("nav").removeClass("open");

      // $("#navbar").removeClass("open");
    });
    // $("#nav-toggle").on("click", function () {
    //   this.classList.toggle("active");
    // });
  });
})(jQuery);

// Slider
// $(".hero-box").slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

$(".hero-box").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

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

// Filter

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterAssets");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterMenu");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// fixed element

// var startProductBarPos = -1;
// window.onscroll = function () {
//   var bar = document.getElementById("banner-text");
//   if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

//   if (pageYOffset > startProductBarPos) {
//     bar.style.position = "fixed";
//     bar.style.top = 0;
//   } else {
//     bar.style.position = "relative";
//   }
// };

// function findPosY(obj) {
//   var curtop = 0;
//   if (typeof obj.offsetParent != "undefined" && obj.offsetParent) {
//     while (obj.offsetParent) {
//       curtop += obj.offsetTop;
//       obj = obj.offsetParent;
//     }
//     curtop += obj.offsetTop;
//   } else if (obj.y) curtop += obj.y;
//   return curtop;
// }

// $(document).ready(function () {
//   // Cache selectors for faster performance.
//   var $window = $(window),
//     $bannerText = $("#bannerText"),
//     $bannerAnchor = $("#bannerAnchor");

//   // Run this on scroll events.
//   $window.scroll(function () {
//     var window_top = $window.scrollTop();
//     var div_top = $bannerAnchor.offset().top;
//     if (window_top > div_top) {
//       // Make the div sticky.
//       $bannerText.addClass("stick");
//       $bannerAnchor.height($bannerText.height());
//     } else {
//       // Unstick the div.
//       $bannerText.removeClass("stick");
//       $bannerAnchor.height(0);
//     }
//   });
// });

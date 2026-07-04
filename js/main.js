(function ($) {
  "use strict";

  // Keep footer copyright year current
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Instagram Reels coverflow carousel
  var reelsCarousel = document.getElementById("reelsCarousel");
  if (reelsCarousel) {
    var reelCards = Array.prototype.slice.call(reelsCarousel.querySelectorAll(".reel-card"));
    var nextRole = { left: "right", center: "left", right: "center" };
    var prevRole = { right: "left", left: "center", center: "right" };

    function rotate(map) {
      reelCards.forEach(function (card) {
        card.setAttribute("data-role", map[card.getAttribute("data-role")]);
      });
    }

    var nextBtn = reelsCarousel.querySelector(".reel-next");
    var prevBtn = reelsCarousel.querySelector(".reel-prev");
    if (nextBtn) nextBtn.addEventListener("click", function () { rotate(nextRole); });
    if (prevBtn) prevBtn.addEventListener("click", function () { rotate(prevRole); });

    reelCards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (card.getAttribute("data-role") !== "center") {
          e.preventDefault();
          rotate(card.getAttribute("data-role") === "right" ? nextRole : prevRole);
        }
      });
    });
  }

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);

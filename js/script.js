var elemTop = [];

/**
 * Caches the top offset of each `.scroll-point` element relative to the
 * sticky header, used as anchor thresholds for nav highlighting.
 */
function PositionCheck() {
  var headerH = $("#header").outerHeight(true);
  $(".scroll-point").each(function (i) {
    elemTop[i] = Math.round(parseInt($(this).offset().top - headerH - 10));
  });
}

/**
 * Highlights the nav item matching the current scroll position.
 *
 * Conditions are evaluated from the last section first so the previously
 * unreachable Contact branch becomes effective. An `atBottom` fallback
 * forces the last section to stay current when the viewport is tall enough
 * that the scroll never reaches `elemTop[2]`.
 */
function ScrollAnime() {
  var scroll = Math.round($(window).scrollTop());
  var atBottom = scroll + $(window).height() >= $(document).height() - 5;
  var NavElem = $("#pc-nav li");
  $("#pc-nav li").removeClass("current");
  if (atBottom || scroll >= elemTop[2]) {
    $(NavElem[2]).addClass("current");
  } else if (scroll >= elemTop[1]) {
    $(NavElem[1]).addClass("current");
  } else if (scroll >= elemTop[0]) {
    $(NavElem[0]).addClass("current");
  }
}

$("#pc-nav a,#g-nav a").click(function () {
  var elmHash = $(this).attr("href");
  var headerH = $("#header").outerHeight(true);
  var pos = Math.round($(elmHash).offset().top - headerH);
  $("body,html").animate({ scrollTop: pos }, 500);
  return false;
});

$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});

$("body").scrollgress({
  height: "5px",
  color: "rgb(9, 63, 180)",
});

/**
 * Toggles the page-top button between its hidden (`RightMove`) and
 * visible (`LeftMove`) states based on the scroll offset.
 */
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("#page-top").removeClass("RightMove");
    $("#page-top").addClass("LeftMove");
  } else {
    if ($("#page-top").hasClass("LeftMove")) {
      $("#page-top").removeClass("LeftMove");
      $("#page-top").addClass("RightMove");
    }
  }
}

$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

/**
 * Adds or removes scroll-triggered animation classes (`bgLRextend`,
 * `bgappear`, `fadeUp`, `flipLeft`) as their trigger elements enter or
 * leave the viewport.
 */
function fadeAnime() {
  $(".bgLRextendTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("bgLRextend");
    } else {
      $(this).removeClass("bgLRextend");
    }
  });
  $(".bgappearTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("bgappear");
    } else {
      $(this).removeClass("bgappear");
    }
  });
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });

  $(".flipLeftTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("flipLeft");
    } else {
      $(this).removeClass("flipLeft");
    }
  });
}

$(window).on("resize", function () {
  sliderSet();
});

$(window).scroll(function () {
  PageTopAnime();
  PositionCheck();
  ScrollAnime();
  fadeAnime();
});

$(window).on("load", function () {
  $("#splash-logo").delay(1200).fadeOut("slow");

  $("#splash")
    .delay(1500)
    .fadeOut("slow", function () {
      $("body").addClass("appear");
      sliderSet();
      PositionCheck();
      ScrollAnime();
      PageTopAnime();

      $(".open").each(function (index, element) {
        var Title = $(element).children(".title");
        $(Title).addClass("close");
        var Box = $(element).children(".box");
        $(Box).slideDown(500);
      });
    });

  $(".splashbg").on("animationend", function () {
    fadeAnime();
  });
});

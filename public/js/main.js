$(document).ready(() => {
  $("#about").on("click", () => {
    $("#content-box")
      .children()
      .fadeOut(200);
    setTimeout(() => {
      $("#about-content").fadeIn(300);
    }, 200);
  });

  $("#works").on("click", () => {
    $("#content-box")
      .children()
      .fadeOut(200);
    setTimeout(() => {
      $("#works-content").fadeIn(300);
    }, 200);
  });

  $("#contact").on("click", () => {
    $("#content-box")
      .children()
      .fadeOut(200);
    setTimeout(() => {
      $("#contact-content").fadeIn(300);
    }, 200);
  });

  $("#top").on("click", () => {
    $("#content-box")
      .children()
      .fadeOut(200);
    setTimeout(() => {
      $("#default-content").fadeIn(300);
    }, 200);
  });
});

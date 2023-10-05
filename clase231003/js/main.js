$(document).ready(function () {
  $("#abrir").click(function () {
    $("#ventana").show();
  });
  $("#cerrar").click(function () {
    $("#ventana").hide();
  });

  $("#slideshow img:first").show();

  setInterval(function () {
    var currentImage = $("#slideshow img:visible");
    var nextImg = currentImage.next("img").length
      ? currentImage.next("img")
      : $("#slideshow img:first");
    currentImage.fadeOut(1000);
    nextImg.fadeIn(1000);
  }, 3000);

  $(".toggle-menu").click(function () {
    $("header nav ul").slideToggle();
  });
});

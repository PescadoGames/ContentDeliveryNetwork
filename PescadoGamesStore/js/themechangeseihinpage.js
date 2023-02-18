function BodyDarkLightAnim() {
  if (location.search == '') {

  } else {
    // ライトモード
    document.body.style.color = "#333";
    document.body.classList.add("light-theme");
    $('.InstallButton').addClass("LightButton");
    $('.header').addClass("headerlight");
    $('.headera').addClass("headerlighta");
    $('td').addClass("headerlighta");
    $('th').addClass("headerlighta");
    $('h2').addClass("headerlighta");
    $('.installDialog').addClass("Dialog-Light");
  }
}

$(window).on('load', function () {
    BodyDarkLightAnim();
});

function BodyDarkLightAnim() {
    if (location.search == '?Dark') {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
}

$(window).on('load', function () {
    BodyDarkLightAnim();
});

//JS Based in https://www.site-convert.com/archives/2188
const str = location.href
const a = str.slice(0, 22)
const b = 'sp/'
const c = str.slice(22)

function isSmartPhone() {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    document.location = (a + b + c);
  } else {
  }
}

$(window).on('load', function () {
    isSmartPhone();
});

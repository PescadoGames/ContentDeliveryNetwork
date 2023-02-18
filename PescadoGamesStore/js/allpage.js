var $slider = $('.slider');

$slider.slick({
	arrows: false,
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});

$slider.on('beforeChange', function (slick, currentSlide, data) {
	document.getElementById('sliderdisch2').classList.remove('textshow');
	document.getElementById('sliderdisch3').classList.remove('textshow');
	document.getElementById('sliderdiscatag').classList.remove('textshow');
});

$slider.on('afterChange', function (slick, currentSlide, data) {
	var current_slide = $slider.slick('slickCurrentSlide');

	// (1) XMLHttpRequestオブジェクトを作成
	const xhr = new XMLHttpRequest();

	// (2) 取得するファイルの設定
	xhr.open('get', 'assets/xml/topslider.xml');

	// (3) リクエスト（要求）を送信
	xhr.send();

	xhr.onreadystatechange = function () {

		// (4) 通信が正常に完了したか確認
		if (xhr.readyState === 4 && xhr.status === 200) {

			// (5) XMLファイルのデータをページに表示
			const sitemap = this.responseXML;

			const slidertitle1 = sitemap.querySelector("slidertitle1");
			const slidertitle2 = sitemap.querySelector("slidertitle2");
			const slidertitle3 = sitemap.querySelector("slidertitle3");
			const slidertitle4 = sitemap.querySelector("slidertitle4");
			const slidersubtitle1 = sitemap.querySelector("slidersubtitle1");
			const slidersubtitle2 = sitemap.querySelector("slidersubtitle2");
			const slidersubtitle3 = sitemap.querySelector("slidersubtitle3");
			const slidersubtitle4 = sitemap.querySelector("slidersubtitle4");
			const sliderlink1 = sitemap.querySelector("sliderlink1");
			const sliderlink2 = sitemap.querySelector("sliderlink2");
			const sliderlink3 = sitemap.querySelector("sliderlink3");
			const sliderlink4 = sitemap.querySelector("sliderlink4");

			if (current_slide == 0) {
				document.getElementById('sliderdisch2').innerHTML = slidertitle1.textContent;
				document.getElementById('sliderdisch3').innerHTML = slidersubtitle1.textContent;
				document.getElementById('sliderdiscatag').setAttribute('href', sliderlink1.textContent);
			}
			else if (current_slide == 1) {
				document.getElementById('sliderdisch2').innerHTML = slidertitle2.textContent;
				document.getElementById('sliderdisch3').innerHTML = slidersubtitle2.textContent;
				document.getElementById('sliderdiscatag').setAttribute('href', sliderlink2.textContent);
			}
			else if (current_slide == 2) {
				document.getElementById('sliderdisch2').innerHTML = slidertitle3.textContent;
				document.getElementById('sliderdisch3').innerHTML = slidersubtitle3.textContent;
				document.getElementById('sliderdiscatag').setAttribute('href', sliderlink3.textContent);
			}
			else if (current_slide == 3) {
				document.getElementById('sliderdisch2').innerHTML = slidertitle4.textContent;
				document.getElementById('sliderdisch3').innerHTML = slidersubtitle4.textContent;
				document.getElementById('sliderdiscatag').setAttribute('href', sliderlink4.textContent);
			}
			document.getElementById('sliderdisch2').classList.add('textshow');
			document.getElementById('sliderdisch3').classList.add('textshow');
			document.getElementById('sliderdiscatag').classList.add('textshow');
		}
	};
});
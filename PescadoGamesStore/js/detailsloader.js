// (1) XMLHttpRequestオブジェクトを作成
const xhr = new XMLHttpRequest();

// (2) 取得するファイルの設定
xhr.open('get', 'https://secure.pescadogames.com/PescadoGamesStore/xml/appdetails.xml');

// (3) リクエスト（要求）を送信
xhr.send();

xhr.onreadystatechange = function () {

    // (4) 通信が正常に完了したか確認
    if (xhr.readyState === 4 && xhr.status === 200) {
        var file_area = document.getElementById('copyright');

        // (5) XMLファイルのデータをページに表示
        const sitemap = this.responseXML;
        const urls = sitemap.querySelectorAll(location.search.replace("?", ""));

        for (var url_data of urls) {
            const url = url_data.querySelector("appname");
            const last_update = url_data.querySelector("lastmod");
            const updatedetails = url_data.querySelector("updatedetails");
            const appdetails = url_data.querySelector("appdetails");
            const appbackground = url_data.querySelector("appbackground");
            const appicon = url_data.querySelector("appicon");
            const version = url_data.querySelector("version");
            const developer = url_data.querySelector("developer");

            document.getElementById('apptitle').innerHTML = url.textContent;
            document.getElementById('installdialogappnameplusinfo').innerHTML = url.textContent + document.getElementById('installdialogappnameplusinfo').innerHTML;
            document.getElementById('headerappname').innerHTML = url.textContent;
            document.getElementById('headerappicon').src = appicon.textContent;
            document.getElementById('appbackground').src = appbackground.textContent;
            document.getElementById('lastmoddate').innerHTML = last_update.textContent;
            document.getElementById('nowversion').innerHTML = version.textContent;
            document.getElementById('developer').innerHTML = developer.textContent;
            document.getElementById('developer').href = "https://store.pescadogames.com/developer.html?" + developer.textContent;
            document.getElementById('details').innerHTML = appdetails.textContent;
        }

        for (var url_data of urls) {
            if (url_data.querySelector("youtubeslider1").textContent == "") {
            }
            else {
                const youtubeimg1 = document.createElement('iframe');
                const youtubeslider1 = url_data.querySelector("youtubeslider1");
                youtubeimg1.src = "https://www.youtube.com/embed/" + youtubeslider1.textContent;
                youtubeimg1.frameBorder = 0;
                youtubeimg1.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                youtubeimg1.allowFullscreen = true;
                youtubeimg1.style.aspectRatio = "16 / 9";
                document.getElementById("slider").appendChild(youtubeimg1);
            }

            if (url_data.querySelector("youtubeslider2").textContent == "") {
            }
            else {
                const youtubeimg2 = document.createElement('iframe');
                const youtubeslider2 = url_data.querySelector("youtubeslider2");
                youtubeimg2.src = "https://www.youtube.com/embed/" + youtubeslider2.textContent;
                youtubeimg2.frameBorder = 0;
                youtubeimg2.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                youtubeimg2.allowFullscreen = true;
                youtubeimg2.style.aspectRatio = "16 / 9";
                document.getElementById("slider").appendChild(youtubeimg2);
            }

            if (url_data.querySelector("slider1").textContent == "") {
            }
            else {
                const img1 = document.createElement('img');
                const slider1 = url_data.querySelector("slider1");
                img1.src = slider1.textContent;
                document.getElementById("slider").appendChild(img1);
            }

            if (url_data.querySelector("slider2").textContent == "") {
                break;
            }
            else {
                const img2 = document.createElement('img');
                const slider2 = url_data.querySelector("slider2");
                img2.src = slider2.textContent;
                document.getElementById("slider").appendChild(img2);
            }

            if (url_data.querySelector("slider3").textContent == "") {
                break;
            }
            else {
                const img3 = document.createElement('img');
                const slider3 = url_data.querySelector("slider3");
                img3.src = slider3.textContent;
                document.getElementById("slider").appendChild(img3);
            }

            if (url_data.querySelector("slider4").textContent == "") {
                break;
            }
            else {
                const img4 = document.createElement('img');
                const slider4 = url_data.querySelector("slider4");
                img4.src = slider4.textContent;
                document.getElementById("slider").appendChild(img4);
            }

            if (url_data.querySelector("slider5").textContent == "") {
                break;
            }
            else {
                const img5 = document.createElement('img');
                const slider5 = url_data.querySelector("slider5");
                img5.src = slider5.textContent;
                document.getElementById("slider").appendChild(img5);
            }
        }
    }
};
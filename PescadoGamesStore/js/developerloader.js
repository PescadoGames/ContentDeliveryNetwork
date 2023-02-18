// 読み込むJSONファイル
const jsonurl = "https://secure.pescadogames.com/PescadoGamesStore/json/";

if (location.search.replace("?", "") == "") {
    document.getElementById('devname').innerHTML = "NotFound.";
    document.getElementById('devicon').src = "https://cdn.pescadogames.com/PescadoGamesStore/image/questionmark.png";
    document.getElementById('devbackground').src = "https://cdn.pescadogames.com/PescadoGamesStore/image/NotFoundBack.png";
    document.getElementById('devdetails').innerHTML = "このデベロッパーは見つかりませんでした。<br>URLが間違っていないかなどを確認してみてください。";
    document.getElementById('container').innerHTML = "";
}
else {
    // (1) XMLHttpRequestオブジェクトを作成
    const xhr = new XMLHttpRequest();

    // (2) 取得するファイルの設定
    xhr.open('get', 'https://secure.pescadogames.com/PescadoGamesStore/xml/developer.xml');

    xhr.withCredentials = true;

    // (3) リクエスト（要求）を送信
    xhr.send();

    xhr.onreadystatechange = function () {

        // (4) 通信が正常に完了したか確認
        if (xhr.readyState === 4 && xhr.status === 200) {
            // (5) XMLファイルのデータをページに表示
            const sitemap = this.responseXML;
            const url_data = sitemap.querySelector(location.search.replace("?", ""));

            if (url_data == null) {
                document.getElementById('devname').innerHTML = "NotFound.";
                document.getElementById('devicon').src = "image/questionmark.png";
                document.getElementById('devbackground').src = "https://cdn.pescadogames.com/PescadoGamesStore/image/NotFoundBack.png";
                document.getElementById('devdetails').innerHTML = "このデベロッパーは見つかりませんでした。<br>URLが間違っていないかなどを確認してみてください。";
                document.getElementById('container').innerHTML = "";
                return;
            }
            else {
                const developername = url_data.querySelector("developername");
                const devdetails = url_data.querySelector("developerdetails");
                const devbackground = url_data.querySelector("devbackground");
                const devicon = url_data.querySelector("devicon");

                document.getElementById('devname').innerHTML = developername.textContent;
                document.getElementById('devallsofttitle').innerHTML = developername.textContent + document.getElementById('devallsofttitle').textContent;
                document.getElementById('devicon').src = devicon.textContent;
                document.getElementById('devbackground').src = devbackground.textContent;
                document.getElementById('devdetails').innerHTML = devdetails.textContent;

                fetch(jsonurl + developername.textContent + "AllApps.json", {
                    mode: 'cors'
                })
                    .then(response => response.json())
                    .then(data => roadJSON(data));
            }
        }
    };
}

function roadJSON(readjson) {
    // id属性で要素を取得
    var addtoelement = document.getElementById('osusumechildchild');

    for (let json of readjson) {
        // a要素を生成
        var newdiv = document.createElement('a');
        // a要素のhrefを書き換え
        newdiv.setAttribute('href', json.applink)
        // a要素にclassを追加
        newdiv.className = 'osusumecont';
        //img要素を生成
        var image = document.createElement('img');
        //img要素のsrcを変更
        image.src = json.appimage;
        //img要素のサイズを調整
        image.style.width = '100%';
        image.style.height = 'auto';
        //img要素にclassを指定
        image.className = 'appimage';
        //imgタグを追加
        newdiv.appendChild(image);

        var iconandnamediv = document.createElement('div');

        iconandnamediv.className = 'appiconandname';

        var appicon = document.createElement('img');
        //img要素のsrcを変更
        appicon.src = json.icon;
        //img要素のサイズを調整
        appicon.style.width = '75px';
        appicon.style.height = 'auto';
        //img要素にclassを指定
        appicon.className = 'appicon';
        //imgタグを追加
        iconandnamediv.appendChild(appicon);

        var appnameandlatestflexdiv = document.createElement('div');

        appnameandlatestflexdiv.className = 'appnameandlatestupdateflexdiv';

        var appname = document.createElement('p');

        appname.innerHTML = json.appname;

        iconandnamediv.appendChild(appname);

        var latestupdate = document.createElement('p');

        latestupdate.innerHTML = "LastUpdate:" + json.latestupdate;

        appnameandlatestflexdiv.appendChild(appname);

        appnameandlatestflexdiv.appendChild(latestupdate);

        //aタグを追加
        newdiv.appendChild(iconandnamediv);

        iconandnamediv.appendChild(appnameandlatestflexdiv);

        // 指定した要素の中の末尾に挿入
        addtoelement.appendChild(newdiv);
    }

}
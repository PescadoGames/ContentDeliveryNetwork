const notifurl = "http://192.168.10.130/PescadoGamesLauncher/assets/json/recommendapp.json";  // 読み込むJSONファイル

function roadJSON(readjson) {
    console.log(readjson);
    console.log(Object.keys(readjson).length);

    // JSONファイルを整形して表示

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

// 起動時の処理
window.addEventListener("load", () => {
    fetch(notifurl)
        .then(response => response.json())
        .then(data => roadJSON(data));
});
var downloadurl;

window.onload = function () {
  // (1) XMLHttpRequestオブジェクトを作成
  const xhr = new XMLHttpRequest();

  // (2) 取得するファイルの設定
  xhr.open('get', 'https://secure.pescadogames.com/PescadoGamesStore/xml/appdetails.xml');

  // (3) リクエスト（要求）を送信
  xhr.send();

  xhr.onreadystatechange = function () {

    // (4) 通信が正常に完了したか確認
    if (xhr.readyState === 4 && xhr.status === 200) {
      // (5) XMLファイルのデータをページに表示
      const sitemap = this.responseXML;
      const urls = sitemap.querySelectorAll(location.search.replace("?", ""));

      for (var url_data of urls) {
        const url = url_data.querySelector("appname");
        document.getElementById('installdialogappnameplusinfo').innerHTML = url.textContent + "の<br>インストールを開始します。<br>よろしいですか？";
      }
    }
  };
  let text = document.getElementById('installDialogContainer').innerHTML;
  document.getElementById('installDialogContainer').innerHTML = "<div class='SeihinName'> <h2>____のダウンロードとインストールを開始しますか？</h2> </div> <input class='InstallButton' type='button' value='Install' onclick='InstallStarting();'/>";
}

//C#側にインストール開始のメッセージを送る
function InstallStart() {
  document.title
  chrome.webview.hostObjects.class.MessageShow("InstallStart");
}
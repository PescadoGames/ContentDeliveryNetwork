document.getElementById('HomeButton').addEventListener('click', function(){
  document.getElementById("ForwardButton").style.display="block";
  document.getElementById("BackButton").style.display="block";
  chrome.webview.hostObjects.class.MessageShow("HomeShow");
});

document.getElementById('DownloadButton').addEventListener('click', function(){
  document.getElementById("ForwardButton").style.display="none";
  document.getElementById("BackButton").style.display="none";
  chrome.webview.hostObjects.class.MessageShow("DownloadShow");
});

document.getElementById('SettingButton').addEventListener('click', function(){
  document.getElementById("ForwardButton").style.display="none";
  document.getElementById("BackButton").style.display="none";
  chrome.webview.hostObjects.class.MessageShow("SettingShow");
});

document.getElementById('CloseButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("CloseStart");
});

document.getElementById('FullScreenButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("FullScreenStart");
});

document.getElementById('MinimizeButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("MinimizeStart");
});

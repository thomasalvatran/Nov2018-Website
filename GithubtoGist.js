// JavaScript Document
function convertGithub2Gist() {
  // var regex = /^(?:https?:\/\/)?(?:www\.)?/i;
  var regex = /^\s+(?:https?:\/\/)?(?:www\.)?/i;
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  var res = (copyText.value).replace(regex, "");
  var clipboard = '<script ' + 'src = "http://gist-it.appspot.com/' + (res).substring(0, (res).length + 1) + '"' + '>' + '<\/script>';

  var clip = "http://gist-it.appspot.com/" + (copyText.value).substring(1, (copyText.value).length + 1);

  //alert("Copied the text: " + clipboard);

  // document.getElementById("gist").innerHTML =  "test" ;


  var divcontent = clipboard;
  var res = divcontent.replace(/<script/g, "&lt;script").replace(/<\/script/g, "&lt;/script");

  document.getElementById("gist").innerHTML = res;
  document.getElementById("gist1").innerHTML = encodeURIComponent(res);
  submitForm(clipboard);
}

function submitForm(msg) {

  $.ajax({
    url: 'GithubtoGist.php',
    //url: 'wp-content/themes/tovantran_test/js/GithubtoGist.php',
    dataType: "html",
    async: true,
    type: 'GET',
    data: { data: msg },
    success: function (msg) {
      var iframeDocument = document.getElementById('git_frame').contentDocument;
      iframeDocument.open();
      iframeDocument.write(msg);
      iframeDocument.close();
      document.getElementById("git_frame").innerHTML = msg;  //write script not working
    }
  });
}

<!DOCTYPE html>
<html>

<body>
<?php 
if (isset($_GET['data'])) {
//if ($_GET) { //old way
  echo $_GET['data'];
} else {

  ?>

<p>
Click on the button to copy the text from the text field. Try to paste the text in of github (e.g. ctrl+v) and click convert afterwards the result at the bottom, to see the gist. For example: convert github file link to gist.
https://github.com/thomasalvatran/Apr2016/blob/master/smartpointer18.cpp
</p>

<input style="height:20px; width:200px" type="text" value="Paste github link here" title="Paste github link here and click convert" id="myInput">
<button onclick="convertGithub2Gist()">Convert</button>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="GithubtoGist.js" type="text/javascript"></script>

<p>The document.execCommand() method is not supported in IE8 and earlier.</p>

<u><b>Gist:</b></u>
<div style="box-sizing:content-box; width:98%; height:60px; border:solid #A3C731 1px; padding:5px" id="gist"></div>
<br><u><b>Url Encoder/Decode:</b></u><br>
<div style="box-sizing:content-box; width:98%; height:60px; border:solid #A3C731 1px; padding:5px" id="gist1"></div>

<iframe frameborder="0px" height="600px" width="800" id = "git_frame"></iframe>

<?php

}
?>
</body>
</html>  
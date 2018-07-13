<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
  <title>Dari Wholesales</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection" />
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection" />
  <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
</head>

<body>
<?php require 'header.php'; ?>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br>
      <br>
      <h1 class="header center orange-text">March Sales</h1>
      <div class="row center">
        <h5 class="header col s12 light">great deals inside!!</h5>
      </div>
      <br>
      <br>

    </div>
  </div>

  <!-- PDF.js -->
  <div id="control" class="row center pdf-controlls">
    <div class="col pin white s12 m12">
      <a id="prev" class="waves-effect waves-white btn-flat">
        <i class="material-icons left">arrow_back</i>back</a>
      <a id="next" class="waves-effect waves-white btn-flat">
        <i class="material-icons left">arrow_forward</i>forward</a>
      <a id="increaseZoom" class="waves-effect waves-black btn-flat">
        <i class="material-icons left">zoom_in</i>zoom-in</a>
      <a id="decreaseZoom" class="waves-effect waves-black btn-flat">
        <i class="material-icons left">zoom_out</i>zoom-out</a>
      &nbsp; &nbsp;
      <span>Page:
        <span id="page_num"></span> /
        <span id="page_count"></span>
      </span>
    </div>
    <div class="section z-depth-1">
      <canvas id="the-canvas"></canvas>
    </div>
  </div>

  <br>
  <br>
  </div>

  <?php require'footer.php'; ?>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/pdfConfig.js"></script>
  <script>
    // var elem = document.querySelector('.pin');
    // var options = {
    //   top: 0
    // }
    // var instance = M.Pushpin.init(elem, options);
    // var instance = M.Pushpin.getInstance(elem);
    var elem = $('.pin');
    var offset = elem.offset();
    $('.pin').pushpin({
      top: offset.top
    });
  </script>

</body>

</html>
<!doctype html>
<?php


  include ("server.php");

?>

<html>
<head>
<link rel="stylesheet" href="formtest.css"/>
<script src="formtest.js"></script>
</head>
<body>
<div class="wrapper">

<div id="form">

    <form>
    <h1> Form </h1>
    NAME: <input class="form_input" type="text" name="Full Name"/> </br>
    PHONE: <input class="form_input"type="tel" name="number" maxlength="10" /> </br>
    EMAIL: <input class="form_input" type="email" name="email" pattern="(@)"/> </br>
    <input id="sub_btn" type="submit" value="Enter" />
   </form>
</div>

<div id="section_cats">
<a href="https://www.facebook.com/catlovers.co/"><img  src="http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg" alt="an image of a cat on a computer looking cute"/></a>
<iframe id="img_disps" width="400" height="400" src="https://www.youtube.com/embed/CE-JlvmnRtY" frameborder="0" allowfullscreen></iframe>
</div>

<div id="section_choice">
  <div id="cat">
  <img onclick="displayImage1()" src="https://www.vegsoc.org/image/factsheets/cats-350px.jpg" alt="cat">
  <div id="cat_response">
      <div id="dog_response4"></div>
      <div id="dog_response5"></div>
      <div id="dog_response6"></div>
  </div>
  </div>

  <div id="dog">
  <img onclick="displayImage2()" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Doggie_games.jpg/350px-Doggie_games.jpg" alt="dog">
  <div id="dog_response">
      <div id="dog_response1"></div>
      <div id="dog_response2"></div>
      <div id="dog_response3"></div>
  </div>
</div>

  <div id="bird">
  <img onclick="displayImage3()" src="http://wwtrade.org/English/images/thumb/7/79/Yellow-footed_green_pigeon_%28Treron_phoenicoptera%29_Photograph_by_Shantanu_Kuveskar.jpg/350px-Yellow-footed_green_pigeon_%28Treron_phoenicoptera%29_Photograph_by_Shantanu_Kuveskar.jpg" alt ="bird"/>
  <div id="bird_response">
    <div id="dog_response7"></div>
    <div id="dog_response8"></div>
    <div id="dog_response9"></div>
  </div>

  </div>
</div>

<div class="_inventory">
    <form class="" action="" method="POST"  >
        <input type="submit" value ="Buy Truck">

    </form>

</div>
  <script>

  function displayImage1() {

      var dogplay4 = document.getElementById('dog_response4');
      var dogplay5 = document.getElementById('dog_response5');
      var dogplay6 = document.getElementById('dog_response6');

      var img4 = document.createElement("img");
      var img5 = document.createElement("img");
      var img6 = document.createElement("img");
      img4.src = 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg';
      img5.src = 'http://s1.1zoom.net/big0/730/Cats_White_background_508108.jpg';
      img6.src = 'https://static.pexels.com/photos/60224/pexels-photo-60224.jpeg';

      img4.width = "50";
      img5.width = "50";
      img6.width = "50";

      img4.height = "50";
      img5.height = "50";
      img6.height = "50";

      dogplay4.appendChild(img4);
      dogplay5.appendChild(img5);
      dogplay6.appendChild(img6);


  }

  function displayImage2() {

      var dogplay1 = document.getElementById('dog_response1');
      var dogplay2 = document.getElementById('dog_response2');
      var dogplay3 = document.getElementById('dog_response3');

      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      var img3 = document.createElement("img");
      img1.src = 'https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg';
      img2.src = 'http://wallpaper-gallery.net/images/dogs-wallpaper/dogs-wallpaper-23.jpg';
      img3.src = 'https://www.what-dog.net/Images/faces2/scroll0014.jpg';

      img1.width = "50";
      img2.width = "50";
      img3.width = "50";

      img1.height = "50";
      img2.height = "50";
      img3.height = "50";

      dogplay1.appendChild(img1);
      dogplay2.appendChild(img2);
      dogplay3.appendChild(img3);


  }

  function displayImage3() {

      var dogplay7 = document.getElementById('dog_response7');
      var dogplay8 = document.getElementById('dog_response8');
      var dogplay9 = document.getElementById('dog_response9');

      var img7 = document.createElement("img");
      var img8 = document.createElement("img");
      var img9 = document.createElement("img");
      img7.src = 'http://store.manutd.com/stores/manutd/basket/basket.aspx';
      img8.src = 'http://www.birdforum.net/opus/images/thumb/e/ee/DSC_8847.JPG/350px-DSC_8847.JPG';
      img9.src = 'http://www.birdforum.net/opus/images/thumb/c/c0/IMG_11130_copy.jpg/350px-IMG_11130_copy.jpg';

      img7.width = "50";
      img8.width = "50";
      img9.width = "50";

      img7.height = "50";
      img8.height = "50";
      img9.height = "50";

      dogplay7.appendChild(img7);
      dogplay8.appendChild(img8);
      dogplay9.appendChild(img9);


  }

  </script>
  </div>


</div>


</div>


</body>
<html>

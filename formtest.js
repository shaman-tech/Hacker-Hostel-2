//javascript

// function test() {
//
//
//
// var doggyplayground = document.getElementById('dog_response')
// var doggies = ['https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg', 'http://wallpaper-gallery.net/images/dogs-wallpaper/dogs-wallpaper-23.jpg', 'https://www.what-dog.net/Images/faces2/scroll0014.jpg', 'http://www.youloveit.ru/uploads/posts/2013-02/1360156200_youloveit-ru_kawainyshka06.jpg']
//
// function displayimages(images){
//     var targetimage = images.shift() // process doggies images one at a time
//     if (targetimage){ // if not end of array
//         getImage(targetimage).then(function(url){ // load image then...
//             var dog = document.createElement('img')
//             dog.setAttribute('src', url)
//             doggyplayground.appendChild(dog) // add image to DIV
//             displayimages(images) // recursion- call displayimages() again to process next image/doggy
//         }).catch(function(url){ // handle an image not loading
//             console.log('Error loading ' + url)
//             displayimages(images) // recursion- call displayimages() again to process next image/doggy
//         })
//     }
// }
//
// displayimages(doggies)
//
//
// }

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

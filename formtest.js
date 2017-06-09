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

function displayImage(){
    var dogplay1 = document.getElementById('dog_response1')
    var dogplay2 = document.getElementById('dog_response2')
    var dogplay3 = document.getElementById('dog_response3')

    var img1 = document.createElement(img);
    var img2 = document.createElement(img);
    var img3 = document.createElement(img);
    img1.src = 'https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg';
    img3.src = 'https://www.what-dog.net/Images/faces2/scroll0014.jpg';
    dogplay1.appendChild(img1);
    dogplay2.appendChild(img2);
    dogplay3.appendChild(img3);


}

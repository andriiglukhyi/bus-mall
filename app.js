'use sctict'

var pictures = [];
var gCounter = 0;

 function Picture(url){
   this.url = url;
   this.name = this.url.split(".")[0];
   this.timesShown = 0;
   this.click = 0;
   this.shown=false;
   pictures.push(this);
  //  console.log(pictures);
 }

var stuff=["bag.jpg","banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg","bubblegum.jpg","chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg" ]

function newElement (){
  for (var i=0; i < stuff.length; i++) {
    new Picture(stuff[i]);
    // console.log(pictures);
  }
}

var arr3img = function () {
   var counter = 0;
   var images = [];
   while (counter<3){
     var index = Math.floor(Math.random() * pictures.length);
     var ran = pictures[index];
     // console.log(ran);
    if (ran.shown === false){
      ran.timesShown++
      counter++
      ran.shown=true;
      images.push(ran);
      console.log(images);
    }
    }
    for (var i = 0; i < pictures.length; i++) {
      if (i !== index) {
        pictures[i].shown = false;
      }
  }
  return images;
}


function render(){
  var images = arr3img();
    document.getElementById('pic1').innerHTML = "<img src=\"img/" + images[0].url+"\" height=\"300\" width=\"300\">";
    document.getElementById('pic2').innerHTML = "<img src=\"img/" + images[1].url+"\" height=\"300\" width=\"300\">";
    document.getElementById('pic3').innerHTML = "<img src=\"img/" + images[2].url+"\" height=\"300\" width=\"300\">";
    gCounter++
  }





function begining(){
  newElement();
  pic1 = document.getElementById('pic1').innerHTML = "<img src=\"img/" + pictures[0].url+"\" height=\"300\" width=\"300\">";
  pic2 = document.getElementById('pic2').innerHTML = "<img src=\"img/" + pictures[1].url+"\" height=\"300\" width=\"300\">";
  pic3 = document.getElementById('pic3').innerHTML = "<img src=\"img/" + pictures[2].url+"\" height=\"300\" width=\"300\">";

}


pic1.addEventListener('click', render);
pic2.addEventListener('click', render);
pic3.addEventListener('click', render);


function newPictures(){
  while (gCounter<25){
    render();
  }
}

begining();
newPictures();

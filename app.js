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
   while (counter<6){
     var index = Math.floor(Math.random() * pictures.length);
     var ran = pictures[index];
     // console.log(ran);
    if (ran.shown === false){
      ran.timesShown++
      counter++
      ran.shown=true;
      images.push(ran);
    }
    for (var i = 0; i < pictures.length; i++) {
      if (i !== index) {
        pictures[i].shown = false;
      }
    }
  }
  return images;
}


function render(){
  var images = arr3img();
  for (var i = 0; i<images.length;i++){
    document.getElementById('pic1').innerHTML = "<img src=\"img/" + images[i].url+"\">";
    document.getElementById('pic2').innerHTML = "<img src=\"img/" + images[i].url+"\">";
    document.getElementById('pic3').innerHTML = "<img src=\"img/" + images[i].url+"\">";
  }
  gCounter++
}



function newPictures(){
  while (gCounter<0){
  pic1.addEventListener('click', render);
  pic2.addEventListener('click', render);
  pic1.addEventListener('click', render);
  render();

  }

}

function begining(){
  newElement();
  document.getElementById('pic1').innerHTML = "<img src=\"img/" + pictures[0].url+"\">";
  pic2=document.getElementById('pic2');
  pic2.innerHTML = "<img src=\"img/" + pictures[1].url+"\">";
  pic3=document.getElementById('pic3');
  pic3.innerHTML = "<img src=\"img/" + pictures[2].url+"\">";

}


begining();


newPictures();

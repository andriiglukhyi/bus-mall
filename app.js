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
     if (ran.shown === false || ran.showlast === false){
       ran.timesShown++
       counter++
       ran.shown=true;
       ran.showlast = true;
       images.push(ran);
//    for (var i = 0; i < pictures.length; i++) {
//      if (i !== imag {
//        pictures[i].shown = false;
//        console.log(pictures);
}
}
for (var i = 0; i < pictures.length; i++) {
  if (i !== images[1] && images[2] && images[0]) {
    pictures[i].shown = false;
    console.log(pictures);
  }
}
// for (var i = 0; i < pictures.length; i++) {
// if (i !== images[1] && images[2] && images[0]) {
//   pictures[i].showlast = false;
// }
return images;
// }
}


function render(){
  var images = arr3img();
    document.getElementById('pic1').innerHTML = "<img src=\"img/" + images[0].url+"\">";
    document.getElementById('pic2').innerHTML = "<img src=\"img/" + images[1].url+"\">";
    document.getElementById('pic3').innerHTML = "<img src=\"img/" + images[2].url+"\">";
    // gCounter++
  }





function begining(){
  newElement();
  render();
  gCounter++

}


pic1.addEventListener('click', newPictures);
pic2.addEventListener('click', newPictures);
pic3.addEventListener('click', newPictures);




// function clickCounter(e){
//   var qwe = e.pic.src.slice(49);
//   for (var i=0; i<pictures.length; i++){
//     if ( qwe ===pictures[i].url){
//       pictures[i].click++
//     }
//   }
// }

function newPictures(){
  clickCounter();
  if (gCounter<25){
    render();
    gCounter++
} else{


  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels :
    }
  }
}
}
  //   // for (var i =0; i<3; i++){
  //   //   images[i].click++
  //  }
  // } else{
  //   var canvas = document.getElementById('chart');
  //   var ctx = canvas.getContext('2d');




begining();

// newPictures();

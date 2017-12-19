'use sctict'

var pictures = [];

 function Picture(url){
   this.url = url;
   this.name = this.url.split(".")[0];
   this.timesShown=0;
   this.shown=false;
   pictures.push(this);
  //  console.log(pictures);
 }

var stuff=["bag.jpg","banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg"]

for var (i=0; i<stuff.length; i++){
  new Picture(stuff[i]);
  }

var arr3img = function () {
   var counter = 0;
   var images = [];
   while (counter<6){
    var ran = pictures[Math.floor(Math.random() * pictures.length)];
    // console.log(ran);
    if (ran.shown === false){
      ran.timesShown++
      counter++
      ran.shown=true;
      images.push(ran);
    }
  }
  return images;
}


function render(){
  var images = arr3img();
  for (var i = 0; i<images.length;i++){
    document.getElementsById("pic1");
    pic[i].innerHTML = "<img src=\"img/" + images[i]+"\">";
    document.getElementsById("pic2");
    pic[i].innerHTML = "<img src=\"img/" + images[i]+"\">";
    document.getElementsById("pic3");
    pic[i].innerHTML = "<img src=\"img/" + images[i]+"\">";
}
}



render();
div.addEventListener('click', render);

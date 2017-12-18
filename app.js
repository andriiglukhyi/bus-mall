'use sctict'


 function Picture(name, url){
   this.name = name;
   this.url = url;
   this.pictures = [];
   Picture.pictures.push(this);
 }

Picture.prototype.randomElement = function () {
     return this.pictures.[Math.floor(Math.random() * this.pictures.length)]
 }


function makeList(){
    var pic = document.creatElement('div');
    pic.innerHTML = "<img src=\"" + Picture.randomElement[]+"\"";

    pic = document.creatElement('div');
   pic.innerHTML = "<img src=\"" + Picture.randomElement[]+"\"";

   pic = document.creatElement('div');
   pic.innerHTML = "<img src=\"" + Picture.randomElement[]+"\"";

}

for (var picture = 0; picture< this.pictures.length){
  makeList()
}

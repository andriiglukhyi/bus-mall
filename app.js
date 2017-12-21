'use sctict'

var pictures = [];
var gCounter = 0;

var names = [];
var times = [];
var clicks = [];
var list = [];
var number = 0;


/////////////////////////////////////////////////////////////////
if (localStorage.list) {
  var list = JSON.parse(localStorage.list);
} else {
  var list= [];
}
 function Picture(url){
   this.url = url;
   this.name = this.url.split(".")[0];
   this.timesShown = 0;
   this.click = 0;
   this.shown=false;
   pictures.push(this);
  //  console.log(pictures);
 }
///////////////////////////////////////////////////////////////////

var stuff=["bag.jpg","banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg","bubblegum.jpg","chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg" ]


///////////////////////////////////////////////////////////////////
function newElement (){
    if (list.length===pictures.length && list.length !== 0 ){
      pictures = [];
      pictures = list;
      newData();
      makeChart1();
      makeChart2();
    } else{
      for (var i=0; i < stuff.length; i++) {
      new Picture(stuff[i]);
    }
  }
}


///////////////////////////////////////////////////////////////////

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
}
}
for (var i = 0; i < pictures.length; i++) {
  if (i !== images[1] && images[2] && images[0]) {
    pictures[i].shown = false;
    // console.log(pictures);
  }
}
return images;
}
///////////////////////////////////////////////////////////////////

function render(){
  var images = arr3img();
    document.getElementById('pic1').innerHTML = "<img src=\"img/" + images[0].url+"\">";
    document.getElementById('pic2').innerHTML = "<img src=\"img/" + images[1].url+"\">";
    document.getElementById('pic3').innerHTML = "<img src=\"img/" + images[2].url+"\">";
    // gCounter++
  }


///////////////////////////////////////////////////////////////////


function begining(){
  newElement();
  render();
  gCounter++

}

///////////////////////////////////////////////////////////////////

pic1.addEventListener('click', newPictures);
pic2.addEventListener('click', newPictures);
pic3.addEventListener('click', newPictures);


///////////////////////////////////////////////////////////////////

function newPictures(e){
  var qwe = e.target.src.slice(49);
  for (var i=0; i<pictures.length; i++){
    if ( qwe ===pictures[i].url){
      pictures[i].click++
    }
  }
  loadCouner();


  gCounter = number;
  if (gCounter<25){
    render();
    gCounter++
    saveCounter();
    savePictures();
    console.log(gCounter)
    save();
  } else {
    document.getElementById("pic1").remove();
    document.getElementById("pic2").remove();
    document.getElementById("pic3").remove();
    newData();
    makeChart1();
    makeChart2();
    }
  }

///////////////////////////////////////////////////////////////////

function newData (){
  for(var i=0; i<pictures.length; i++){
    names.push(pictures[i].name);
    clicks.push(pictures[i].click);
    times.push(pictures[i].timesShown);

  }
}

///////////////////////////////////////////////////////////////////

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
  }

///////////////////////////////////////////////////////////////////

function makeChart1(){
  var canvas = document.getElementById('chart1');
  var ctx = canvas.getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels :[],
      datasets:[{
        data:[]
      }]
    },
    options: {
      responsive: false,
      scales: {
        yaxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      }
    }
})
for (var i=0; i<pictures.length; i++){
  addData(chart, names[i], times[i]);
//   // console.log(chart.data.datasets.data);
}
}
///////////////////////////////////////////////////////////////////

function makeChart2(){
var canvas = document.getElementById('chart2');
var ctx = canvas.getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels :[],
    datasets:[{
      data:[]
    }]
  },
  options: {
    responsive: false,
    scales: {
      yaxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    }
  }
  })
for (var i=0; i<pictures.length; i++){
addData(chart, names[i], clicks[i]);
//   // console.log(chart.data.datasets.data);
}
}
///////////////////////////////////////////////////////////////////

begining();

///////////////////////////////////////////////////////////////////
function save(){
    localStorage.list = JSON.stringify(pictures);
  }
///////////////////////////////////////////////////////////////////

function saveCounter(){
  localStorage.counter = gCounter
  }
///////////////////////////////////////////////////////////////////
function savePictures(){
  localStorage.list = JSON.stringify(pictures);
}

function loadCouner(){
    if(localStorage.counter){
      number = parseInt(localStorage.counter);
    }
}

// var html="";
// function loadimage(){
//     fetch("https://api.unsplash.com/search/photos/?query=career&client_id=14y0zrVHQS0Q_oUNSz6gTFz-nt9834JZ-mEPu6mnVsk")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//        // console.log(data.results[0].urls.full);
//         var jsonarray=Object.keys(data).length;
//         //console.log(jsonarray);
//         for(var i=0;i<5;i++){
//            console.log(data.results[i].urls.full);
//            html=html+'<img src='+data.results[i].urls.full+' width="300px" height="300px">';
           
//         }
//         $("#img").html(html);
//     })
//  }
// loadimage();

var html="";
function loadimage(){
    fetch("https://api.unsplash.com/search/photos/?query=career&client_id=14y0zrVHQS0Q_oUNSz6gTFz-nt9834JZ-mEPu6mnVsk")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       // console.log(data.results[0].urls.full);
        var jsonarray=Object.keys(data).length;
        //console.log(jsonarray);
        for(var i=0;i<5;i++){
           console.log(data.results[i].urls.full);
          
           html=html+'<div class="slider-item active"><img src='+data.results[i].urls.full+' alt="Slider-1" width="660px" height="330px"></div>';
           
        }
        $("#img").html(html);
    })
 }
 loadimage();
window.onload=function(){
let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.querySelector('#btn-next');


btnPrev.addEventListener('click',function(){
  PrevSlide();
});
btnNext.addEventListener('click',function(){
  NextSlide();
});

function updatePosition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');

  dots.forEach(dot=>{
    dot.classList.remove('dot-active');
  });

  dots[slidePosition].classList.add('dot-active');
}

function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  updatePosition();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
}


const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
 const dot=document.createElement('div');
 dot.classList.add('dot');
 dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');


dots.forEach((dot,index)=>{
  dot.addEventListener('click',function(){
    slidePosition=index;
    updatePosition();
  });
});


setInterval(()=>{
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
},5000);

}
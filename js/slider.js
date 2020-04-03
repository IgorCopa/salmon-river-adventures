const slider = document.querySelector(".slider");
let images = [];
images.length = 6;
let lastImageIndex;
let currentImage;
let changingTime;
let time;

function preLoadImages(){
    let imageNumber = 1;
    for(let i=0; i<images.length; i++){
        images[i] = new Image();
        images[i].src = `https://raw.githubusercontent.com/IgorCopa/salmon-river-adventures/master/images/slider/slide${imageNumber}.jpg`;
        imageNumber++;
    }
}

function renderingImagesOnScreen(pic){
    slider.style.backgroundImage = `url('${images[pic].src}')`;
    slider.style.backgroundRepeat = "no-repeat";
    slider.style.backgroundPosition = "center";
    slider.style.transition = "all .3s ease-in";
}

function start(){
    preLoadImages();
    lastImageIndex = images.length - 1;
    currentImage = 0;
    renderingImagesOnScreen(currentImage);
    changingTime = 3000;
    time = setInterval(changeImage, changingTime);
}

function changeImage(){
    currentImage++;
    if(currentImage>lastImageIndex){
        currentImage = 0;
    }
    renderingImagesOnScreen(currentImage);
}
window.addEventListener("load", start);

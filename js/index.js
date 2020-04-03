/* HAMBURGER MENU */
const hamburgerButton = document.querySelector(".hamburger");
function openNav(){
    const nav = document.querySelector("#navBar");
    const overLay = document.querySelector(".overLay");
    overLay.classList.toggle("toggleNav");
    nav.classList.toggle("toggleNav");

    const up = document.querySelector(".up");
    up.classList.toggle("rotateDown");

    const mid = document.querySelector(".mid");
    mid.classList.toggle("disappear");

    const down = document.querySelector(".down");
    down.classList.toggle("rotateUp");
}
hamburgerButton.addEventListener("click", openNav);

/* CLICK TO GO BUTTON */
const toggleButton = document.querySelector("#toggle");
function clickToGo(){
    const lid = document.querySelector("#lid");
    const pin = document.querySelector("#pin");
    lid.style.top = "37%";
    toggleButton.style.backgroundColor = 'rgba(210, 210, 210)';
    toggleButton.style.boxShadow = '3px 1px 3px rgb(62, 146, 204), -3px 1px 3px rgb(62, 146, 204)';
    
    pin.style.backgroundColor = 'rgba(210, 210, 210)';
    pin.style.boxShadow = '2px 1px 2px rgb(62, 146, 204), -2px 1px 2px rgb(62, 146, 204)';

    window.addEventListener("scroll", () => {
        let topScrollPosition = window.scrollY;
        if(topScrollPosition === 0){
            lid.style.top = "0%";
            toggleButton.style.backgroundColor = 'rgba(0, 0, 0, .7)';
            toggleButton.style.boxShadow = 'none';
            
            pin.style.backgroundColor = 'rgba(0, 0, 0, .7)';
            pin.style.boxShadow = 'none';
        }
    });
}
toggleButton.addEventListener("click", clickToGo);
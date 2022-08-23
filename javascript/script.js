window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 200);
})

const btnEl = document.getElementById('menu-btn');
const overlatEl = document.getElementById('overlay');
const menuEl = document.getElementById('mobile-menu');
const counterEl = document.querySelectorAll('.counter');
let scrollStarted = false;

btnEl.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle(){
    btnEl.classList.toggle('open');
    overlatEl.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menuEl.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollpos = window.scrollY;
    if(scrollpos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }else if(scrollpos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}
function countUp(){
    counterEl.forEach((counter) =>{
        counter.innerText = '0';
        const updatecounter = () =>{
            //get count
            const target = +counter.getAttribute('data-target');
            //get current value
            const c = +counter.innerText;
            const increment = target / 100 ;

            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updatecounter, 20);
            }else{
                counter.innerText = target;
            }
        };
        updatecounter();
    });
}
function  reset(){
    counterEl.forEach((counter) => (counter.innerHTML = '0'));
}

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgEl = document.querySelectorAll(".img-slides");
const imgcontainerEl = document.querySelector(".img-container");
 
let currentimg = 1;
let timeout;

nextEl.addEventListener("click", ()=>{
    currentimg++;
    clearTimeout(timeout);
    updateImg();
})
prevEl.addEventListener("click", ()=>{
    currentimg--;
    clearTimeout(timeout);
    updateImg();
})
updateImg();
function updateImg(){
    if(currentimg > imgEl.length){
        currentimg = 1;
    }else if(currentimg < 1){
        currentimg = imgEl.length;
    }
    imgcontainerEl.style.transform =`translateX(-${(currentimg - 1) * 100}%)`;
    //for automatic slide
    // timeout = setTimeout(()=>{
    //     currentimg++;
    //     updateImg();
    // },5000);
}


const btnEle = document.querySelector("#popup");
const closeEl = document.querySelector(".close-icon");
const trailrEl =document.querySelector(".trailer-container");
const videoEl =document.querySelector("iframe");
btnEle.addEventListener("click",()=>{
     trailrEl.classList.remove("active");
 })
closeEl.addEventListener("click", ()=>{
    trailrEl.classList.add("active");
    // videoEl.;
    videoEl.currentTime = 0;
}) 

import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import QestionsPage from "./index.html"
import redirect from "../index";
import images from "../images";
import bg from "/assets/img/0.jpg";
import state from '/settingsState.js';
// import showTimer from '../utils/showtimer';

const qestionsPage = htmlToElement(QestionsPage);
const HBtn = qestionsPage.querySelector('.home-btn');
let time = qestionsPage.querySelector('.time');

HBtn.addEventListener('click', (pageName) =>{
    pageName = 'home'
    redirect(pageName);
});

const picture = qestionsPage.querySelector('.pic-box');
const answercollection = qestionsPage.querySelectorAll('.answer');

let img = new Image();
img.src = bg;

picture.style.backgroundImage = img;


answercollection.forEach(element => {
    let num = getRandomArbitrary(0, 241);
    element.textContent = images[num].author;
    element.addEventListener('click', () =>{
        console.log('choose');
        element.classList.add('choose');
        qestionsPage.querySelector('.right-answer-wrap').classList.toggle('hidden');
    });
});



// if(state[0].timeGame == false){
    let timer = 30;
    console.log(timer);

function showTime() {
    time.textContent = `0:${timer}`;
    timer--; 
    console.log(timer);
    if(timer === -1){
        time.style.color = 'red';
        return
    }
    setTimeout(showTime, 1000);    
}
// };


window.addEventListener('DOMContentLoaded', showTime)

const nextQestion = qestionsPage.querySelector('.next-qestion');

nextQestion.addEventListener('click', (pageName) =>{
    pageName = 'artCategory'
    redirect(pageName);
});



export default qestionsPage;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import Home from "./index.html"
import button from "../button";
import settingsImg from "/assets/png/settings.png";
import redirect from "../index";

const home = htmlToElement(Home);

let img = new Image;
img.src = settingsImg;
img.classList.add('settings-img')
button.append(img);
const txt = document.createElement('div');
txt.textContent = 'settings';
txt.classList.add('settings-txt')
button.append(txt);

home.appendChild(button);

// function getPageName(){
//     let pageName = 'settings';
//     redirect(pageName);
// }

button.addEventListener('click', () =>{
    let pageName = 'settings';
    redirect(pageName);
});


const artistQuiz = home.querySelector('.artist-quiz');



artistQuiz.addEventListener('click', () =>{
    let pageName = 'artCategory';
    redirect(pageName);
});

const picQuiz = home.querySelector('.pictures-quiz');

picQuiz.addEventListener('click', () =>{
    let pageName = 'picCategory';
    
    redirect(pageName);
});

export default home;


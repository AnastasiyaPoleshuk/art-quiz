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

function getPageName(){
    let pageName = 'settings';
    redirect(pageName);
}

button.addEventListener('click', getPageName);

export default home;
import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import Home from "./index.html"
import button from "../button";
import settingsImg from "/assets/png/settings.png";

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
export default home;
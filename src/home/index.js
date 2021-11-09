import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import Home from "./index.html"
import button from "../button";

const home = htmlToElement(Home);

let img = new Image;
img.src = '/assets/png/settings.png';
button.append(img);
console.log(button);

home.appendChild(button);
export default home;
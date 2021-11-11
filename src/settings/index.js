import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import Settings from "./index.html"
import redirect from "../index";

const settings = htmlToElement(Settings);
const SaveBtn = settings.querySelector('.save');

SaveBtn.addEventListener('click', (pageName) =>{
    pageName = 'home'
    redirect(pageName);
});

export default settings;
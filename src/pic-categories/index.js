import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import PicCategory from "./index.html"
import redirect from "../index";

const picCategory = htmlToElement(PicCategory);
const HBtn = picCategory.querySelector('#home');
const ScoreBtn = picCategory.querySelector('#score');
const card = picCategory.querySelectorAll('.card');

HBtn.addEventListener('click', (pageName) =>{
    pageName = 'home'
    redirect(pageName);
});

card.forEach(element => {
    element.addEventListener('click', (pageName) =>{
        pageName = 'qestions'
        redirect(pageName);
    });
});

// ScoreBtn.addEventListener('click', (pageName) =>{
//     pageName = 'home'
//     redirect(pageName);
// });

export default picCategory;
import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import ArtCategory from "./index.html"
import redirect from "../index";

const artCategory = htmlToElement(ArtCategory);
const HomeBtn = artCategory.querySelector('#home');
const ScoreBtn = artCategory.querySelector('#score');
const card = artCategory.querySelectorAll('.card');

HomeBtn.addEventListener('click', (pageName) =>{
    pageName = 'home'
    redirect(pageName);
});

let cardNumber = artCategory.querySelectorAll('.number');


card.forEach(element => {
    element.addEventListener('click', (pageName) =>{
        pageName = 'qestions'
        redirect(pageName);
    });
});

export default artCategory;
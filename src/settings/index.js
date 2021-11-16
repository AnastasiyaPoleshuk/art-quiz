import htmlToElement from "../utils/htmlToElement";
import "./index.scss"
import Settings from "./index.html"
import redirect from "../index";
import { settingState } from '/settingsState.js';



const settings = htmlToElement(Settings);
const SaveBtn = settings.querySelector('.save');

SaveBtn.addEventListener('click', (pageName) => {
    pageName = 'home'
    redirect(pageName);
});


// let sound = new Audio('/assets/sound/correct-answer.mp3');


// const volumeOff = settings.querySelector('.volume-off');

// function soundOff (){   
//     sound.volume = 0;
// }

// volumeOff.addEventListener('click', soundOff)

// window.SetVolume = function(val){  
//     sound.volume = val / 100;
// }


const checkbox = settings.querySelector('.checkbox');

checkbox.onchange = function() {
    if (settingState.timeGame == false) {
        settingState.timeGame = true;
    } else {
        settingState.timeGame = false;
    }
}

export default settings;
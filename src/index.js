import './index.scss';
import home from "./home"
import settings from "./settings"
import artCategory from "./art-categories"
import picCategory from "./pic-categories"
import qestionsPage from "./qestions-page"

const root = document.querySelector('.root');
root.append(home);


export default function(page){

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    switch (page){
        case 'home':
            root.append(home);
            break;        
        case 'settings':
            root.append(settings);
            break;
        case 'artCategory':
            root.append(artCategory);
            break;
        case 'picCategory':
            root.append(picCategory);
            break;
        case 'qestions':
            root.append(qestionsPage);
            break;
    }
}

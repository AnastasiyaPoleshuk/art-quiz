import './index.scss';
import home from "./home"
import settings from "./settings"
<<<<<<< HEAD
import artCategory from "./art-categories"
import picCategory from "./pic-categories"
import qestionsPage from "./qestions-page"
=======
>>>>>>> 51046672738936db727ad06c3f49fef5ae7c9385

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
<<<<<<< HEAD
        case 'artCategory':
            root.append(artCategory);
            break;
        case 'picCategory':
            root.append(picCategory);
            break;
        case 'qestions':
            root.append(qestionsPage);
            break;
=======
>>>>>>> 51046672738936db727ad06c3f49fef5ae7c9385
    }
}

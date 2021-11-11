import './index.scss';
import home from "./home"
import settings from "./settings"

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
    }
}

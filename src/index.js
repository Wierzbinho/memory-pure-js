// import Game from './game';
// import '../styles/index.scss';

import jdenticon from 'jdenticon';

// new Game();
function component() {
    let element = document.createElement('div');

    element.innerHTML = jdenticon.toSvg("icon value", 200);

    return element;
}

document.body.appendChild(component());
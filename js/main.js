/*----- constants -----*/
const playerOneMark = 'X';
const playerTwoMark = 'O';


/*----- app's state (variables) -----*/
let turnTracker, winningPlayer;

let topLeft, topCenter, topRight;
let middleLeft, middleCenter, middleRight;
let bottomLeft, bottomCenter, bottomRight;




/*----- cached element references -----*/
const topLeftEl = document.getElementById('top-left');
const topCenterEl = document.getElementById('top-center');
const topRightEl = document.getElementById('top-right');
const middleLeftEl = document.getElementById('middle-left');
const middleCenterEl = document.getElementById('middle-center');
const middleRightEl = document.getElementById('middle-right');
const bottomLeftEl = document.getElementById('bottom-left');
const bottomCenterEl = document.getElementById('bottom-center');
const bottomRightEl = document.getElementById('botom-right');

const allBoxesEl = [topLeftEl, topCenterEl, topRightEl, middleLeftEl, middleCenterEl, middleRightEl, bottomLeftEl, bottomCenterEl, bottomRightEl];

const boxes = document.querySelectorAll('.boxes');

const indicator = document.getElementById('indicator');

const resetButton = document.getElementById('reset');



/*----- event listeners -----*/
topLeftEl.addEventListener('click', handleBoxClickTl);
topCenterEl.addEventListener('click', handleBoxClickTc);
topRightEl.addEventListener('click', handleBoxClickTr);
middleLeftEl.addEventListener('click', handleBoxClickMl);
middleCenterEl.addEventListener('click', handleBoxClickMc);
middleRightEl.addEventListener('click', handleBoxClickMr);
bottomLeftEl.addEventListener('click', handleBoxClickBl);
bottomCenterEl.addEventListener('click', handleBoxClickBc);
bottomRightEl.addEventListener('click', handleBoxClickBr);

resetButton.addEventListener('click', init);



/*----- functions -----*/

function init() {
    topLeft = null;
    topCenter = null;
    topRight = null;
    middleLeft = null;
    middleCenter = null;
    middleRight = null;
    bottomLeft = null;
    bottomCenter = null;
    bottomRight = null;

    turnTracker = true;

    winningPlayer = null;

    indicator.textContent = '';
    render();

}

function render() {


    if (turnTracker === true) {
        indicator.textContent = `Place an X`;
    }

    if (turnTracker === false) {
        indicator.textContent = `Place an O`;
    }



    if (topLeft === 1) {
        topLeftEl.textContent = playerOneMark;
    } else if (topLeft === 2) {
        topLeftEl.textContent = playerTwoMark;
    } else {
        topLeftEl.textContent = '';
    }

    if (topCenter === 1) {
        topCenterEl.textContent = playerOneMark;
    } else if (topCenter === 2) {
        topCenterEl.textContent = playerTwoMark;
    } else {
        topCenterEl.textContent = '';
    }

    if (topRight === 1) {
        topRightEl.textContent = playerOneMark;
    } else if (topRight === 2) {
        topRightEl.textContent = playerTwoMark;
    } else {
        topRightEl.textContent = '';
    }

    if (middleLeft === 1) {
        middleLeftEl.textContent = playerOneMark;
    } else if (middleLeft === 2) {
        middleLeftEl.textContent = playerTwoMark;
    } else {
        middleLeftEl.textContent = '';
    }

    if (middleCenter === 1) {
        middleCenterEl.textContent = playerOneMark;
    } else if (middleCenter === 2) {
        middleCenterEl.textContent = playerTwoMark;
    } else {
        middleCenterEl.textContent = '';
    }

    if (middleRight === 1) {
        middleRightEl.textContent = playerOneMark;
    } else if (middleRight === 2) {
        middleRightEl.textContent = playerTwoMark;
    } else {
        middleRightEl.textContent = '';
    }

    if (bottomLeft === 1) {
        bottomLeftEl.textContent = playerOneMark;
    } else if (bottomLeft === 2) {
        bottomLeftEl.textContent = playerTwoMark;
    } else {
        bottomLeftEl.textContent = '';
    }

    if (bottomCenter === 1) {
        bottomCenterEl.textContent = playerOneMark;
    } else if (bottomCenter === 2) {
        bottomCenterEl.textContent = playerTwoMark;
    } else {
        bottomCenterEl.textContent = '';
    }

    if (bottomRight === 1) {
        bottomRightEl.textContent = playerOneMark;
    } else if (bottomRight === 2) {
        bottomRightEl.textContent = playerTwoMark;
    } else {
        bottomRightEl.textContent = '';
    }


    boxes.forEach(function (box) {
        if (box.textContent === playerOneMark || box.textContent === playerTwoMark) {
            box.style.backgroundColor = '#D0FFFB';
        } else {
            box.style.backgroundColor = '#FFFFFF';
        }
    });

    if (winningPlayer === 'playerOne') {
        indicator.textContent = 'X Wins!'
    } else if (winningPlayer === 'playerTwo') {
        indicator.textContent = 'O Wins!'
    }

    if (
        (!!topLeft && !!topCenter && !!topRight && !!middleLeft && !!middleCenter && !!middleRight && !!bottomLeft && !!bottomCenter && !!bottomRight && !winningPlayer)
    ) {
        indicator.textContent = 'Tie game!'
    }
}



function handleBoxClickTl() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!topLeft) {
        return;
    }
    if (turnTracker === true) {
        topLeft = 1;
    } else if (turnTracker === false) {
        topLeft = 2;
    }
    turnTracker = !turnTracker
    
    winCondition();
    render();
}

function handleBoxClickTc() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!topCenter) {
        return;
    }
    if (turnTracker === true) {
        topCenter = 1;
    } else if (turnTracker === false) {
        topCenter = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickTr() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!topRight) {
        return;
    }
    if (turnTracker === true) {
        topRight = 1;
    } else if (turnTracker === false) {
        topRight = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickMl() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!middleLeft) {
        return;
    }
    if (turnTracker === true) {
        middleLeft = 1;
    } else if (turnTracker === false) {
        middleLeft = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickMc() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!middleCenter) {
        return;
    }
    if (turnTracker === true) {
        middleCenter = 1;
    } else if (turnTracker === false) {
        middleCenter = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickMr() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!middleRight) {
        return;
    }
    if (turnTracker === true) {
        middleRight = 1;
    } else if (turnTracker === false) {
        middleRight = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickBl() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!bottomLeft) {
        return;
    }
    if (turnTracker === true) {
        bottomLeft = 1;
    } else if (turnTracker === false) {
        bottomLeft = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickBc() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!bottomCenter) {
        return;
    }
    if (turnTracker === true) {
        bottomCenter = 1;
    } else if (turnTracker === false) {
        bottomCenter = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}

function handleBoxClickBr() {
    if (winningPlayer === 'playerOne' || winningPlayer === 'playerTwo') {
        return;
    }
    if (!!bottomRight) {
        return;
    }
    if (turnTracker === true) {
        bottomRight = 1;
    } else if (turnTracker === false) {
        bottomRight = 2;
    }
    turnTracker = !turnTracker
    winCondition();
    render();
}



function winCondition() {
    if (
        (topLeft === 1 && topCenter === 1 && topRight === 1) ||
        (middleLeft === 1 && middleCenter === 1 && middleRight) === 1 ||
        (bottomLeft === 1 && bottomCenter === 1 && bottomRight === 1) ||
        (topLeft === 1 && middleLeft === 1 && bottomLeft === 1) ||
        (topCenter === 1 && middleCenter === 1 && bottomCenter === 1) ||
        (topRight === 1 && middleRight === 1 && bottomRight === 1) ||
        (topLeft === 1 && middleCenter === 1 && bottomRight === 1) ||
        (topRight === 1 && middleCenter === 1 && bottomLeft === 1)
    ) {
        winningPlayer = 'playerOne';
    } else if (
        (topLeft === 2 && topCenter === 2 && topRight === 2) ||
        (middleLeft === 2 && middleCenter === 2 && middleRight) === 2 ||
        (bottomLeft === 2 && bottomCenter === 2 && bottomRight === 2) ||
        (topLeft === 2 && middleLeft === 2 && bottomLeft === 2) ||
        (topCenter === 2 && middleCenter === 2 && bottomCenter === 2) ||
        (topRight === 2 && middleRight === 2 && bottomRight === 2) ||
        (topLeft === 2 && middleCenter === 2 && bottomRight === 2) ||
        (topRight === 2 && middleCenter === 2 && bottomLeft === 2)

    ) {
        winningPlayer = 'playerTwo';
    }
}




init();
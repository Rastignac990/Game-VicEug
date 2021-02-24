

// Target config
const aim = document.querySelector('#cube');
const playground = document.querySelector('#playground');
aim.addEventListener('click', function (e) {
    aim.style.backgroundColor = 'red';
    console.log('you won');
    e.stopImmediatePropagation();
    aim.style.backgroundColor = 'red';
})

playground.addEventListener('click', function (e) {
    alert('The keyboard won');
    console.log('You lose');
})


//Moving Cube
let posTop = 0;
let posRight = 0;
let posLeft = 0;
let posDown = 0;
let playerKeyboard = document.querySelector('#cube');
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.code == "ArrowRight") {
        posLeft++;
        playerKeyboard.style.left = posLeft + '%';
    };
    if (posLeft > 93.7) {
        posLeft = 0;
    }
    if (e.code == "ArrowLeft") {
        posLeft--;
        playerKeyboard.style.left = posLeft + '%';
    };
    if (posLeft < 0) {
        posLeft = 93;
    }
    if (e.code == "ArrowDown") {
        posTop++;
        playerKeyboard.style.top = posTop + '%';
    };
    if (posTop > 86) {
        posTop = 0;
    }
    if (e.code == "ArrowUp") {
        posTop--;
        playerKeyboard.style.top = posTop + '%';
    };
    if (posTop < 0) {
        posTop = 86;
    }
})


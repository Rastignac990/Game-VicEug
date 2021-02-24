

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
    };
    if (posLeft > 90) {
        posLeft = 0;
    }
    if (e.code == "ArrowLeft") {
        posLeft--;
    };
    if (posLeft < 0) {
        posLeft = 90;
    }
    if (e.code == "ArrowDown") {
        posTop++;
    };
    if (posTop > 90) {
        posTop = 0;
    }
    if (e.code == "ArrowUp") {
        posTop--;
    };
    if (posTop < 0) {
        posTop = 90;
    }
    playerKeyboard.style.left = posLeft + '%';
    playerKeyboard.style.top = posTop + '%';
})




// Target config
const aim = document.querySelector('#cube');
const playground = document.querySelector('#playground');
let playerOne = 0;
let playerTwo = 0;
aim.addEventListener('click', function (e) {
    if (e) {
        e.stopImmediatePropagation();
        playerOne++;
        playerTwo = 0;
        console.log('Player One Win! ' + playerOne + ' - ' + playerTwo);
        document.querySelector('#playerOne').innerText = playerOne;
    }

})

playground.addEventListener('click', function (e) {
    playerTwo++;
    playerOne;
    console.log('Player Two Win! ' + playerOne + ' - ' + playerTwo);
    document.querySelector('#playerTwo').innerText = playerTwo;
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
    if (posLeft > 95) {
        posLeft = 0;
    }
    if (e.code == "ArrowLeft") {
        let newP = parseInt(playerKeyboard.style.right);
        newP = newP - 10;
        newP + "%";
        posLeft--;
    };
    if (posLeft < 0) {
        posLeft = 95;
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

// Players


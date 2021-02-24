//Players name

const playerOneName = document.querySelector('#playerOneName');
const playerTwoName = document.querySelector('#playerTwoName');
let nameOne = document.querySelector('#playerOneName');
let nameTwo = document.querySelector('#playerTwoName');

const nameFirst = prompt('Enter player One');
const nameSecond = prompt('Enter player Two');

if (nameFirst) {
    document.querySelector('#playerOneName').innerText = nameFirst;
    //console.log(nameFirst);
}

if (nameSecond) {
    document.querySelector('#playerTwoName').innerText = nameSecond;
    //console.log(nameSecond);
}

//     e.stopImmediatePropagation();
//     aim.style.backgroundColor = 'red';
// })

// playground.addEventListener('click', function (e) {
//     alert('The keyboard won');
//     console.log('You lose');
// })



// MOUSE WON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* let mouseclicked = 0;

function mousewon() {
    event.stopImmediatePropagation();
    mouseclicked +=1;
    if (mouseclicked > 1) {
        mouseclicked = 0;
        mousemisclicked = 0
    }
    document.getElementById("player1").innerHTML = mouseclicked;
    
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// BOARD WON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let mousemisclicked = 0;

function boardwon() {
    
    mousemisclicked +=1;
    if (mousemisclicked > 4) {
        mouseclicked = 0;
        mousemisclicked = 0;
        console.log("Hellooooo")
        
    }
    document.getElementById("player2").innerHTML = mousemisclicked;
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// COUNTER RESET !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
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
        document.querySelector('#playerOne').innerText = playerOne;
    }
})

playground.addEventListener('click', function (e) {
    if (e) {
        playerTwo++;
        playerOne;
        //console.log('Player Two Win! ' + playerOne + ' - ' + playerTwo);
        document.querySelector('#playerTwo').innerText = playerTwo;
    }
})


//Moving Cube
let posTop = 0;
let posRight = 0;
let posLeft = 0;
let posDown = 0;
let playerKeyboard = document.querySelector('#cube');
document.addEventListener('keydown', function (e) {
    //console.log(e);
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
// document.querySelector("#cube").click
// if ()
// let clicked = clicked +1;
// document.getElementById("player1").innerHTML = clicked;
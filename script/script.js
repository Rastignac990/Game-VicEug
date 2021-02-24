

// Target config
const aim = document.querySelector('#cube');
const playground = document.querySelector('#playground');

aim.addEventListener('click', function (e) {
    console.log('you won');
    alert('The mouse won');
    e.stopImmediatePropagation();
})

playground.addEventListener('click', function (e) {
    alert('The keyboard won');
    console.log('You lose');
})


//Moving Cube
let posTop = 10;
let posRight = 10;
let posLeft = 10;
let posDown = 10;
let playerKeyboard = document.querySelector('#cube');
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.code == "ArrowRight") {
        posLeft++;
        playerKeyboard.style.left = posLeft + '%';
    };
    if (e.code == "ArrowLeft") {
        let newP = parseInt(playerKeyboard.style.right);
        newP = newP - 10;
        newP + "%";
    };

})

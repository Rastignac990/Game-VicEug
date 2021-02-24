

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

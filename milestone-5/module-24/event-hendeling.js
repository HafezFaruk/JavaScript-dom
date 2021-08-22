function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

const greenButton = document.getElementById('green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}

const goldenButton = document.getElementById('golden-button');
goldenButton.addEventListener('click', goldenRod);
function goldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


document.getElementById('hotpink-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
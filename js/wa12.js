function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    const resetvalue = 0000000000
    output.textContent = resetvalue;
}

function plusRunner() {
    plus(outputInt);
}

function minus() {
    output.textContent = outputInt - 1;
}

function plus() {
    if (outputInt < 9999999999){
        outputInt +=1;

    }
}

// function minus() {
//     output.textContent = - 1;
// }

// function plus() {
//     output.textContent = + 1;
// }

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

const output = document.querySelector('.output');
const outputInt = parseInt(output.textContent);







// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }

var slider = document.getElementById('myRange');
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");

function update() {
    sliderOutput.textContent = slider.value;
}
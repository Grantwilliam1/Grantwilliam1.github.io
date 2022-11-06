//document.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.button');
quoteButton.addEventListener('click', getQuote);
var color = ["#222f3e", "#f368e0", "#ee5283", "#CB2821", "#AEA04B", "#F75E25", "#F39F18", "#252850", "#FEF6C9"];

const endpoint = 'https://api.thecatapi.com/v1/images/search';

async function getQuote() {
    let image = document.getElementById("cat")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.scr = json[0].url)
    console.log('Clicked button');
    let text = await fetch(endpoint);
    let response = await text.text();
    if (text){
        let json_response = JSON.parse(response);
        console.log('cats aquired');
        console.log(response);
        console.log(json_response[0]['url']);
        displayQuote(json_response[0]['url']);
    }
}

function displayQuote(x) {
    document.getElementById('cat').src = x;
}

getQuote();

const btn = document.getElementById('js-color');
btn.addEventListener('click', function onClick(event) {
    console.log('clicked');
    const background = document.getElementById('background');
    var randomNum = Math.floor(Math.random() * color.length);
    background.style.backgroundColor = color[randomNum];
});
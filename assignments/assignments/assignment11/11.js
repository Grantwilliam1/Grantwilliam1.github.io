//document.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.button');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.thecatapi.com/v1/images/search';

async function getQuote() {
    console.log('Clicked button');
    let text = await fetch(endpoint);
    let response = await text.text();
    if (text){
        let json_response = JSON.parse(response);
        console.log('cats aquired');
        console.log(json_response['url']);
        displayQuote(json_response['url']);
    }
}

//[{"id":"c7a","url":"https://cdn2.thecatapi.com/images/c7a.jpg","width":570,"height":760}]

function displayQuote(x) {
    document.getElementById('cat').src = x;
}

getQuote();

// const quoteButton = document.querySelector('.button');
// quoteButton.addEventListener('click', getQuote);

// const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// async function getQuote() {
//     let text = await fetch(endpoint);
//     let response = await text.text();

//     let json_response = JSON.parse(response);
//     console.log(json_response['message']);

//     displayQuote(json_response['message']);
// }



// function displayQuote(x) {
//     // const quoteBox = document.querySelector('#js-quote-text');
//     // const textMessage = document.createTextNode(x);

//     // quoteBox.appendChild(textMessage);

//     document.getElementById('js-quote-text').textContent = x;
// }

// getQuote();
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['kirby.jpeg', 'kirbyLay.jpeg', 'sleepykirby.jpeg', 'bigKirby.jpeg', '25th.jpeg', 'metaknight.jpeg', 'dedede.jpeg', 'waddleDee.jpeg', 'waddleDoo.jpeg', 'kawasaki.jpeg', 'marx.jpeg', 'magalor.jpeg', 'chilly.jpeg', 'taranza.jpeg', 'whispy.jpeg'];

/* Declaring the alternative text for each image file */
const alts = {'kirby/kirby.jpeg': 'Normal Kirby', 'kirby/kirbyLay.jpeg': 'Kirby Laying Down ', 'kirby/sleepykirby.jpeg': 'Sleeping Kirby', 'kirby/bigKirby.jpeg': 'Big Kirby', 'kirby/25th.jpeg': '25th Anniversary Kirby', 'kirby/metaknight.jpeg': 'Meta Knight', 'kirby/dedede.jpeg': "King Dedede", 'kirby/waddleDee.jpeg': 'Waddle Dee', 'kirby/waddleDoo.jpeg': 'Waddle Doo', 'kirby/kawasaki.jpeg': 'Chef Kawasaki', 'kirby/marx.jpeg': 'Marx', 'kirby/magalor.jpeg': 'Magalor', 'kirby/chilly.jpeg': 'Chilly', 'kirby/taranza.jpeg': 'Taranza', 'kirby/whispy.jpeg': 'Whispy Woods'};

/* Looping through images */

for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
});


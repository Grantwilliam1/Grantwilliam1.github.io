window.onload = choosePic;

var myPix = new Array("../img/IMG_2577.JPG", "../img/IMG_5969.JPG", "../img/IMG_0644 2.jpeg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("personal_me").src = myPix[randomNum];
    console.log(myPix[randomNum]);
    console.log("testing");
}

var color = ["#222f3e", "#f368e0", "#ee5283", "#CB2821", "#AEA04B", "#F75E25", "#F39F18", "#252850", "#FEF6C9"]

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
    const background = document.getElementById('background');
    var randomNum = Math.floor(Math.random() * color.length);
    background.style.backgroundColor = color[randomNum];
});


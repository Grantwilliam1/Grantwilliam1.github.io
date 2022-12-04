var myPix = new Array("../img/ampharos/amphy1.jpg", "../img/ampharos/amphy2.jpg", "../img/ampharos/amphy3.png", "../img/ampharos/amphy4.jpg", "../img/ampharos/amphy5.png", "../img/ampharos/amphy6.jpeg", "../img/ampharos/amphy7.png", "../img/ampharos/amphy8.png", "../img/ampharos/amphy9.png", "../img/ampharos/amphy10.jpg", "../img/ampharos/ampharos.png");

const btn = document.getElementById('ampharosBtn');
const amphietext1 = document.getElementById('amphietext1');
const amphietext2 = document.getElementById('amphietext2');
const amphietext3 = document.getElementById('amphietext3');
const amphietext4 = document.getElementById('amphietext4');

btn.addEventListener('click', function onClick(event) {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("amphie").src = myPix[randomNum];
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("amphie1").src = myPix[randomNum];
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("amphie2").src = myPix[randomNum];
    
    amphietext1.textContent = 'This is now an Ampharos Fan Page and there is nothing you can do to change it (I mean, unless you refresh the page, but I put a lot of work into this at least check it out.';
    amphietext2.textContent = 'One of the many reasons why I love ampharos is the design. Gen 2 is where pokemon has a really strong grasp on the pastel-ish style they introduced in the first game, but were willing to expirament with more bizarre ideas. Take Ampharos for instance. While Ampharos LOOKS like it could be from Kanto, it still has a very striking design which helps it stick out. The Yellow appearance helping it stick out, the sort of plain general appearance helps features like the red orb on its head and the tail stick out more, the dopey face helps it convey a friendly feel while still making it believable for it to take on a sort of friendly appearance. Now, the real question though is how much do I actually believe in what I just said? I do, but anyone who has a favorite pokemon can attest to getting more passionate over weird things to justify why their favorite pokemon is their favorite';
    amphietext3.textContent = "I feel like Ampharos's dopey appearace is a major factor as to why I like it so much. It's funny, since my other favorite pokemon are not exactly that dopey looking, but then there's Ampharos. The way the dopey appearance blends with the yellow colors makes it have a sort of comfy feel that a lot of other Pokemon lack. I love it so much that I have more ampharos plushies than most other people have of their favorite pokemon (I have 3)";
    amphietext4.textContent = 'Mega Ampharos is just the perfect design (It might be one of the pictures to the left. If not, you can just click the button until Mega Ampharos makes its appearance). Anyways though, thank you for coming to my Ted Talk :)';
});
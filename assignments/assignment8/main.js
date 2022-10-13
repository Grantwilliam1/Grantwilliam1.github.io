const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 100 fahrenheit outside, so Bob went watch the Super Mario Bros Movie to get out of the heat. When they got to the movies and got their 100 pound popcorn, they happened to sit next to :insertX: and the movie started. However, upon seeing the legendary performance of :insertY:, :insertX: had self destructed. Bob saw the whole thing, but was not surprised — it was :insertY:, and they were :insertZ:.";
const insertX = ["Barack Obama", "James Cordon", "Liam Neeson", "Nicholas Cage"];
const insertY = ["Chris Pratt Mario", "Jack Black Bowser", "Seth Rogan Donkey Kong"];
const insertZ = ["so cool", "so awesome", "epic"];


randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertX:", xItem);
newStory = newStory.replaceAll(":insertY:", yItem);
newStory = newStory.replaceAll(":insertZ:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(100/14)} stone`;
    const temperature = `${Math.round((100-32)*(5/9))} centigrade`;
    newStory = newStory.replaceAll("100 pound", weight);
    newStory = newStory.replaceAll("100 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}










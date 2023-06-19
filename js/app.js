// Assignment 1 | COMP1073 Client-Side JavaScript

const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant" , "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like" , "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking" , "a fat"];
const objects = ["goat", "monkey", "fish", "cow", "frog" , "bug" , "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass" , "in my shoes"];

const subjectButton = document.getElementById("subjectButton");
const subjectElement = document.getElementById("story");
const verbButton = document.getElementById("verbButton");
const verbElement = document.getElementById("story");
const adjectiveButton = document.getElementById("adjectiveButton");
const adjectiveElement = document.getElementById("story");
const objectButton = document.getElementById("objectButton");
const objectElement = document.getElementById("story");
const placeButton = document.getElementById("placeButton");
const placeElement = document.getElementById("story");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const storyElement = document.getElementById("story");

let story = [];

function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function speakWord(word) {
  const speech = new SpeechSynthesisUtterance(word);
  speech.lang = "en-US";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

subjectButton.addEventListener("click", () => {
  const subject = getRandomWord(nouns);
  story.push(subject);
  subjectElement.textContent = subject;
  speakWord(subject);
});

verbButton.addEventListener("click", () => {
  const verb = getRandomWord(verbs);
  story.push(verb);
  verbElement.textContent = verb;
  speakWord(verb);
});

adjectiveButton.addEventListener("click", () => {
  const adjective = getRandomWord(adjectives);
  story.push(adjective);
  adjectiveElement.textContent = adjective;
  speakWord(adjective);
});

objectButton.addEventListener("click", () => {
  const object = getRandomWord(objects);
  story.push(object);
  objectElement.textContent = object;
  speakWord(object);
});

placeButton.addEventListener("click", () => {
  const place = getRandomWord(places);
  story.push(place);
  placeElement.textContent = place;
  speakWord(place);
});

generateButton.addEventListener("click", () => {
  const storyText = story.join(" ");
  storyElement.textContent = storyText;
  speakWord(storyText);
});

resetButton.addEventListener("click", () => {
  story = [];
  storyElement.textContent = "";
});

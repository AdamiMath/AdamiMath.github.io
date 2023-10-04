const typing = document.querySelector('[data-js="typing"]');

const words = ["CONVERTER  ", "VENDER  ", "SER VISTO  "];

let wordIndex = 0;
let charIndex = 1;
let currentWord = "";
let currentChars = "";

let word = () => {
  if (wordIndex === words.length) {
    wordIndex = 0;
  }

  currentWord = words[wordIndex];
  currentChars = currentWord.slice(0, charIndex++);
  typing.textContent = currentChars;

  if (currentChars.length === currentWord.length) {
    wordIndex++;
    charIndex = 1;
  }
};

setInterval(word, 180);

var splide = new Splide(".splide", {
  type: "loop",
 
  arrows: false,
  rewind: true,
});









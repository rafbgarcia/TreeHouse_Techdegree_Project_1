// My First Project - A Random Quote Generator

// This function generates whole random numbers.
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}

/* This function gets the random numbers from generateRandomNumber()
   and generate random RGB colors*/
function generateRandomRGB() {
  var randomRgb = '';
  var mixedColor = generateRandomNumber();
  var mixedColor2 = generateRandomNumber();
  var mixedColor3 = generateRandomNumber();
  randomRgb += 'rgb('+ mixedColor + ','+ mixedColor2 + ',' + mixedColor3 + ')';
  document.body.style.backgroundColor = randomRgb;
}

// This function gets random quotes from the quotes array in quotes.js.
function getRandomQuote ( array ) {
  let randomNumber = Math.floor( Math.random() * array.length );
  let accessQuote = array[randomNumber];
  return accessQuote;
  }

/* This function receives getRandomQuote() values and prints a random quote
from the quotes array*/
function printQuote () {
  let receiveQuote = getRandomQuote( quotes );
  let initHtml = '<p class="quote"> ' + receiveQuote.quote + ' </p>';
  initHtml += '<p class="source"> ' + receiveQuote.source;
    if (receiveQuote.hasOwnProperty("citation")) {
      initHtml += '<span class="citation"> ' + receiveQuote.citation + ' </span>';
    }
    if (receiveQuote.hasOwnProperty("year")) {
      initHtml += '<span class="year"> ' + receiveQuote.year + ' </span>';
    }
    if (receiveQuote.hasOwnProperty("tag")) {
      initHtml += ', ' + '<span class="tag"> ' + receiveQuote.tag + ' </span>'
    }
  initHtml += "</p>";

  document.getElementById('quote-box').innerHTML = initHtml;
  generateRandomRGB();
}

/* This line of code repeatedly calls printQuote() every five seconds.
That way, quotes are changed every five seconds or when buttom is clicked*/
let changeQuote = window.setInterval(printQuote, 15000);

// This event listener will respond to "Show another quote" button clicks.
/* This line of code calls the printQuote() when user clicks on the
"Show Another Quote" button*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

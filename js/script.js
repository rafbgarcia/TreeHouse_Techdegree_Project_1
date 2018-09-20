// My First Project - A Random Quote Generator

// This function generates whole random numbers.
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}

/* This function gets the random numbers from generateRandomNumber()
   generating random RGB colors and applying them to background */
function generateRandomRGB() {
  var randomRgb = '';
  var mixedColor = generateRandomNumber();
  var mixedColor2 = generateRandomNumber();
  var mixedColor3 = generateRandomNumber();
  randomRgb += 'rgb('+ mixedColor + ','+ mixedColor2 + ',' + mixedColor3 + ')';
  document.body.style.backgroundColor = randomRgb;
}

// This function gets random quotes from the quotes array in quotes.js file
function getRandomQuote ( array ) {
  let randomNumber = Math.floor( Math.random() * array.length );
  let accessQuote = array[randomNumber];
  return accessQuote;
  }

/* This function receives getRandomQuote() values and prints a random quote
from the quotes array in quotes.js */
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
/* Specific access using DIV ID in index.html file to print the random
quotes on specific place of the page */
document.getElementById('quote-box').innerHTML = initHtml;
// Call the generateRandomRGB function.
generateRandomRGB();
}
// This event listener will respond to "Show another quote" button clicks.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* This function repeatedly calls printQuote() every seven seconds when
the user click on the "Start Auto Quote" button. */
let autoQuote;
function autoQuoteStart () {
  autoQuote = window.setInterval(printQuote, 7000);
}
// This event listener will respond to "Start Auto Quote" button clicks.
document.getElementById('startShow').addEventListener("click", autoQuoteStart, false);

/* This function stop autoQuoteStart() by clearing the seven seconds
interval when the user click on the "Stop Auto Quote" button. */
function autoQuoteStop () {
  window.clearInterval(autoQuote);
}
// This event listener will respond to "Stop Auto Quote" button clicks.
document.getElementById('stopShow').addEventListener("click", autoQuoteStop, false);

// My First Project - A Random Quote Generator

// This is an array of objects which properties are quotes.
let quotes = [
    { quote: "Life is what happens when you're busy make other plans.", source: "John Lennon", citation: "Beautiful Boy (Darling Boy) Song", year: "1980" },
    { quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", source: "Mark Caine" },
    { quote: "When one door of happiness closes, another opens. But often we look so long at the closed door that we do not see the one which has been opened for us.", source: "Helen Keller" },
    { quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", source: "Mark Twain" },
    { quote: "A friend is one that knows you as you are, understands where you have been, accepts what you have became, and still, gently allows you to grow.", source: "William Shakespeare" },
    { quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", source: "Eleanor Roosevelt" },
    { quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", source: "David Brinkley" },
    { quote: "You only live once, but if you do it right, once is enough.", source: "Mae West", tag: "life quote" },
    { quote: "The only impossible journey is the one you never begin.", source: "Anthony Robbins", year: "2005" },
    { quote: "Life is ten percent what happens to you and ninety percent how you respond to it.", source: "Charles Swindoll" }
];

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

// This function gets random quotes from the quotes array.
function getRandomQuote ( array ) {
  let randomNumber = Math.floor( Math.random() * array.length );
  let accessQuote = array[randomNumber];
  return accessQuote;
  }

// This function receives getRandomQuote() values and prints a random quote from the quotes array.
function printQuote () {
  let receiveQuote = getRandomQuote( quotes );
  let initHtml = '<p class="quote"> ' + receiveQuote.quote + ' </p>';
  initHtml += '<p class="source"> ' + receiveQuote.source;
    if (receiveQuote.hasOwnProperty("citation")) {
      initHtml += '<span class="citation"> ' + receiveQuote.citation + ' </span>';
      } else if (receiveQuote.hasOwnProperty("year")) {
      initHtml += '<span class="year"> ' + receiveQuote.year + ' </span>';
    } else if (receiveQuote.hasOwnProperty("tag")) {
      initHtml += ', ' + '<span class="tag"> ' + receiveQuote.tag + ' </span>'
    }
  initHtml += "</p>";

  document.getElementById('quote-box').innerHTML = initHtml;
  generateRandomRGB();
}

/* This line of code repeatedly calls printQuote() every five seconds.
That way, quotes are changed every five seconds or when buttom is clicked*/
let changeQuote = window.setInterval(printQuote, 5000);

// This event listener will respond to "Show another quote" button clicks.
/* This line of code calls the printQuote() when user clicks on the
"Show Another Quote" button*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

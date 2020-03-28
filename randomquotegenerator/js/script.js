/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

// See quotearray.js file, also linked in index.html

/***
 * `getRandomQuote` function
***/

// all variables declared here.
let randomNumber;
let randomQuote;
let randomAuthor;
let both;
let quoteprint;
let r;
let b;
let g;
let rgb;

/**
*Function to generate and return random quote from the array in quotearray.js, with its Author, citation and year where applicable.
*@param {number}randomNumber - Creates a random number from 0 to array length
*@param {string}randomQuote - Uses random number generated in let randomNumber to get a quote from the random object chosen. This is seperate from the randomAuthor parameter because of HTML replacement later in the code.
*@param {string}randomAuthor - to return the Author from the same object from the array as randomQuote.
*If statements function to add tags, citation or year to randomAuthor string when they are available in the array.
*@Returns {object} randomQuote and randomAuthor in array form.
*/
function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = `${quotes[randomNumber].quote}`; 
  randomAuthor = ` `;
  randomAuthor = ` ${quotes[randomNumber].source}.`;
  if (quotes[randomNumber].tags) {
      randomAuthor += ` <br/>Tags: ${quotes[randomNumber].tags}.`;
  } 
  if (quotes[randomNumber].citation) {
      randomAuthor += ` <br/> Citation: ${quotes[randomNumber].citation}.`;
  }
  if (quotes[randomNumber].year) {
      randomAuthor += ` <br/> Year: ${quotes[randomNumber].year}.`;
  }
    
    return [randomQuote, randomAuthor];
}

/**
*Function to return a create and return random rgb(x,x,x) value in the correct format for use in styling.
*@param {number}randomNumber - Creates a random number from 0 to 255. Used 3 times to prevent duplication in rgb.
*@param {number}r, g and b - variables to assign random value to red, green and blue from rgb value
*@param {string}rgb -  concatenates and return a "rgb(red,green,blue)" value as a string.
*@Returns {string} rgb as "rgb(r,g,b)"
*/
function randomColor(){
  randomNumber = Math.floor(Math.random() * 255); 
  r = randomNumber;
  randomNumber = Math.floor(Math.random() * 255);
  g = randomNumber;
  randomNumber = Math.floor(Math.random() * 255);
  b = randomNumber;
  rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;  
  }

/***
 * `printQuote` function
***/

/**
*Function to change the HTML elements to print the random quote, author, citation and/or year where applicable to the web page.
*@param {object}both - retrieves both [randomQuote, randomAuthor] from getRandomQuote();
*@param {string} quoteprint - retrieves randomQuote as string value.
*@param {string} authorprint - retrieves randomAuthor as string value.
*document.getElementByID - chooses element by id and replaces it with quoteprint or authorprint to display the random quote and its author as well as citation, year and tags where applicable.
*/
function printQuote(){
    both = getRandomQuote();
    quoteprint = both[0];
    authorprint = both[1];
    document.getElementById("write-quote").innerHTML = `${quoteprint}`;
    document.getElementById("write-author").innerHTML = `${authorprint}`;
    document.body.style.backgroundColor = `${randomColor()}`;
}


/**
*Function and setInterval to create a timer to randomly change the quote and background color per specified time interval.
* Please note: Interval set to a fast time for display purposes.
*/
function timer() { 
    setTimeout(printQuote, 100);
}
 setInterval(timer, 7000); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);

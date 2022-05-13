/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// @author   Barbara Vega


/*** 
 * The quotes array below contains 5 objects.  Each object contains keys and values for quotes, source, citation, and year to be used in the random quote generator.
***/

let quotes = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source: 'Nelson Mandela',
  citation: '',
  year: '',
  tags: 'Inspirational'
  },

  {quote: 'The way to get started is to quit talking and begin doing.',
  source: 'Walt Disney',
  citation: '',
  year: '',
  tags: 'Motivation'
  },

  {quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
  source: 'James Cameron',
  citation: '',
  year: '',
  tags: 'Inspirational'
  },
  
  {quote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
  source: 'Antoine de Saint-Exupéry',
  citation: 'The Little Prince',
  year: '1943',
  tags: ''
  },

  {quote: 'Beware; for I am fearless, and therefore powerful.',
  source: 'Mary Shelley',
  citation: 'Frankenstein',
  year: '1818',
  tags: 'Powerful'
  }
]





/***
* the function getRandomQuote selects a random number between 0 and the number of the last index value of the objects in the 'quotes' array.
* Then, the random number is used to select an object from the 'quotes array';
***/

function getRandomQuote(){
let randomNumber = Math.floor(Math.random() * quotes.length);
return quotes[randomNumber];
}





/***
* The `printQuote` function assigned a Randomquote to the variable 'random quote.
* It then creates the 'htmlString' variable to store an interpolated html string with the key and source values.
* After, a two conditional if statements runs to check if the object has a citation and year value.  If they exist the values are concatenated to the htmlString variable for output.
* The final string is then pushed to the html via the getElementById method.
***/


/***
* The 'setInterval' below is used to refresh t he quote every 15 seconds
***/




function printQuote(){
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
   if (randomQuote.citation){
    htmlString += `<span>, ${randomQuote.citation}</span>`;
   }
    if (randomQuote.year){
    htmlString += `<span>, ${randomQuote.year}</span>`;
    }
    if (randomQuote.tags){
    htmlString += `<span> | ${randomQuote.tags}</span>`;
   }
 htmlString += '</p>';

 document.getElementById('quote-box').innerHTML = htmlString;
}




/***
* This code loads the random quote whenever the button on the page is clicked.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval( printQuote , 5000);





// The 'rbgRandomColor' function randomly selects an rgb color between 1 and 256

function rgbRandomColor(){
let RandomColor = Math.floor(Math.random() * 256) +1;
return RandomColor;
}


/***
* This Code changes the background color randomly every time the button is clicked.  
* Credit the code goes to https://bobbyhadz.com/blog/javascript-change-background-color-on-click
***/

const btn = document.getElementById('load-quote');

btn.addEventListener('click', function onClick(event) {

document.body.style.background = `rgb(${rgbRandomColor()}, ${rgbRandomColor()}, ${rgbRandomColor()})`;
});






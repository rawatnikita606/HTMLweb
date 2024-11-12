//Object Array to hold quotes, sources, citaitons and years
var quotes = [
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        source: "Theodore Roosevelt"
    },
    {
       quote: "GOOD MORNING",
       source: "ByME"
    },
    {
        quote: "GOOD AFTERNOON",
        source: "ByME"
    },
    {
        quote: "GOOD EVENING",
        source: "ByME"
    },
    {
        quote: "GOOD NIGHT",
        source: "ByME",
        citation: "Friday Night Lights",
        year: "1990"
    },

];
//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	
//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 255 );
	var green = Math.floor(Math.random() * 255 );
	var blue = Math.floor(Math.random() * 255 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}
//Function to call the getRandomQuote function aqa11nd stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;
					console.log(quoteString);

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}
//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 5000);
//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

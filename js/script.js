var currentQuote = document.getElementById("quoteID");
var sourceID = document.getElementById("sourceID");
var citationID = document.getElementById("citationID");
var yearID = document.getElementById("yearID");
var button = document.getElementById("loadQuote");
var body = document.querySelector("body")

var quotes = [

	{
		quote: "Fashion is architecture. It is a matter of proportions.",
		source: "Coco Chanel",
		citation: "",
		date: "",
		tags: ["Design", "Fashion"]
	},
	{
		quote: "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.",
		source: "Steve Jobs",
		citation: "",
		date: "",
		tags: ["Design"]
	},
	{
		quote: "All of our reasoning ends in surrender to feeling.",
		source: "Blaise Pascal",
		citation: "",
		date: "",
		tags: ["Philosophy"]
	},
	{
		quote: "If your dreams do not scare you, they are not big enough.",
		source: "Ellen Johnson Sirleaf",
		citation: "Commencement address at Harvard",
		date: "2011",
		tags: ["Inspiration"]
	},
	{
		quote: "Try to be a rainbow in someone's cloud.",
		source: "Maya Angelou",
		citation: "Letter to My Daughter",
		date: "2008",
		tags: ["Inspiration"]
	},
	{
		quote:"Any product that needs a manual to work is broken." ,
		source: "Elon Musk",
		citation: "",
		date: "",
		tags: ["Design"]
	},
	{
		quote: "Success consists of going from failure to failure without loss of enthusiasm.",
		source: "Winston Churchill",
		citation: "",
		date: "",
		tags: ["Inspiration"]
	},
	{
		quote: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
		source: "Abraham Lincoln",
		citation: "",
		date: "",
		tags: ["Inspiration", "Philosophy"]
	}
]

var colors = ["#36b55c", "#4682b4", "#db533b", "#484538", "#561a53", "#8B4513", "#DA5722", "#45777a",
	 		  "#378e6b", "#347038", "#445e2e", "#5a5e2e", "#5e3f2e", "#5b4c55", "#5b4040", "#3f435b"]




//Shows a new quote automatically after 10 seconds.
window.setInterval(myCallback, 10000);

function myCallback() {
   getRandomQuote();
}

var copy = quotes.slice(0);
var tracker = quotes.length;


function getRandomQuote() {


		//Reset tracker & copy if tracker gets to 0
	if (tracker < 1) {
		tracker = quotes.length;
		copy = quotes.slice(0);
	}

	var index = Math.floor(Math.random() * copy.length);
	var item = copy[index];
	var currentItem = copy.splice(index,1)[0];

	//Remove commas if citation is not present
		if (currentItem.citation == "") {
			citationID.style.display = "none";
		} else {
			citationID.style.display = "inline";
		}

		//Remove commas if date is not present
		if (currentItem.date == "") {
			yearID.style.display = "none";
		} else {
			yearID.style.display = "inline";
		}


	currentQuote.textContent = currentItem.quote;
	sourceID.textContent = currentItem.source;
	citationID.textContent = currentItem.citation;
	yearID.textContent = currentItem.date;
	body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	button.style.backgroundColor = body.style.backgroundColor;
	console.log(currentQuote.textContent);

	tracker = tracker - 1;
}


//Shows a new quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", function() {
	
	getRandomQuote();

});





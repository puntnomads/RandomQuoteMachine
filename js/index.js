$(document).ready(function() {
selectQuote();

function selectQuote() {
var quotes = ["Be not ashamed of mistakes and thus make them crimes.", "Before you embark on a journey of revenge, dig two graves.", "Everything has its beauty but not everyone sees it.", "Forget injuries, never forget kindnesses.", "He who will not economize will have to agonize.", "I hear and I forget. I see and I remember. I do and I understand.", "Ignorance is the night of the mind, but a night without moon and star.", "It does not matter how slowly you go so long as you do not stop.","Men's natures are alike, it is their habits that carry them far apart.","Our greatest glory is not in never falling, but in getting up every time we do.","Respect yourself and others will respect you.","Study the past if you would define the future.","To see what is right and not to do it is want of courage.","To see what is right, and not to do it, is want of courage or of principle.","What the superior man seeks is in himself; what the small man seeks is in others.","When anger rises, think of the consequences.","When we see men of a contrary character, we should turn inwards and examine ourselves.","Wheresoever you go, go with all your heart.","Have no friends not equal to yourself.","Is virtue a thing remote? I wish to be virtuous, and lo! Virtue is at hand."];

selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
$(".demo").text(selectedQuote);
  }

$(".getQuote").on("click", function() {
selectQuote();
});
  
$(".tweetQuote").on("click", function() {
window.open("https://twitter.com/intent/tweet/?text=" + selectedQuote);
});
  
});
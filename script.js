document.querySelector('.clickme').addEventListener('click', () => {
    document.querySelectorAll('.hidden').forEach((item) => {
      item.classList.toggle("showing");
    });
  });
  
var quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5"
];

function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteTextElement = document.getElementById("quote-text");
  quoteTextElement.textContent = quotes[randomIndex];
}
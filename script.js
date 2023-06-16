document.querySelector('.clickme').addEventListener('click', () => {
    document.querySelectorAll('.hidden').forEach((item) => {
      item.classList.toggle("showing");
    });
  });
  
var quotes = [
  "When you experience setbacks, remember it takes both rain and sunshine to make a rainbow \uD83C\uDF08",
  "We don't grow when things are easy. We grow when we face challenges.",
  "Being on top of the mountain is fun, but we grow in the climb.",
  "Your comfort zone may be your safe place, but you'll never find adventure there!",
];

function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteTextElement = document.getElementById("quote-text");
  quoteTextElement.textContent = quotes[randomIndex];
}
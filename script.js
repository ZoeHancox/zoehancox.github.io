var quotes = [
  "When you experience setbacks, remember it takes both rain and sunshine to make a rainbow \uD83C\uDF08",
  "We don't grow when things are easy. We grow when we face challenges.",
  "Being on top of the mountain is fun, but we grow in the climb.",
  "Your comfort zone may be your safe place, but you'll never find adventure there!",
  "'Do not judge me by my successes, judge me by how many times I fell down and got back up again.' - Nelson Mandela",
  "'It always seems impossible until it's done.' - Nelson Mandela",
  "'Resentment is like drinking poison and then hoping it will kill your enemies.' - Nelson Mandela",
  "'Live life as though nobody is watching, and express yourself as though everyone is listening..' - Nelson Mandela",
  "'I never lose. I either win or learn.' - Nelson Mandela",
  "'The brave man is not the one who has no fears, he is the one who triumphs over his fears.' - Nelson Mandela",
  "'Kindness is one thing you can't give away. It always comes back.' - George Skolsky",
  "'Experience is not what happens to you; it is what you do with what happens to you.' - Aldous Huxley",
  "'Just believe in yourself. Even if you don't, pretend that you do and, at some point, you will.' - Venus Williams",
  "Work hard in silence, let your success be your noise.",
  "The best way to predict the future is to create it.",
  "If it makes you happy, it's never a waste of time.",
  "Strive for progress, not perfection.",
  "'If people are doubting how far you can go, go so far that you can't hear them anymore' - Michele Ruiz",
  "'When you get tired, learn to rest, not to quit' - Banksy",
  "'You get in life what you have the courage to ask for' - Oprah Winfrey",
];

function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteTextElement = document.getElementById("quote-text");
  quoteTextElement.textContent = quotes[randomIndex];
}

document.querySelector('.clickme').addEventListener('click', () => {
  document.querySelectorAll('.hidden').forEach((item) => {
    item.classList.toggle("showing");
  });
});
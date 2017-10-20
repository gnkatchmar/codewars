// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(phrase){
  var res = phrase.split(" ");
  var result = "";
  for (var i = 0, len = res.length; i < len; i++) {
    if (res[i].length < 5) {
      result += res[i] + " ";
    } else {
      result += res[i].split('').reverse().join('') + " "; 
    }
  }
  return result.trim();
}

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
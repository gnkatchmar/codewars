decodeMorse = function(morseCode){
  var res = morseCode.split(" ");
  var result = "";
  for (var i = 0, len = res.length; i < len; i++) {
    if ((res[i] === "") && (res[i+1] === "")) {
      result += " ";
    } else if (res[i] != "") {
      result += MORSE_CODE[res[i]]; 
    }
  }
  return result.trim();
}

decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
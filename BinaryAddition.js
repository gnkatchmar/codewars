function addBinary(a,b) {
  sum = a + b;
  result = "";
  do {
    result += Math.floor(sum % 2);
    sum = Math.floor(sum / 2);
  }
  while (sum > 0);
  return result.split("").reverse().join("");
}

function addBinary(a,b){
  return (a+b).toString(2)
}
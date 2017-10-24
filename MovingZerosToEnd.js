var moveZeros = function (arr) {
  var answer = [];
  var zeros = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      zeros++;
    } else {
      answer.push(arr[i]);
    }
  }
  do {
    answer.push(0);
    zeros--;
  }
  while (zeros > 0);
  return answer;
}


var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
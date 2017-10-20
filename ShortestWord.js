function findShort(s){
  var arr = s.split(" ");
  var answer = 1000;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i].length < answer) {
      answer = arr[i].length;
    }
  }
  return answer;
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
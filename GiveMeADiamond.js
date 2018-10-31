// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

//The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

//Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

//Please see provided test case(s) for examples.

//Python Note
//Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

//JS Note
//JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

function diamond(n){
  if (n < 1 || n % 2 == 0) {
    return null;
  } else {
    diam = "";
    sp = " ";
    domid = n;
    do {
      diam += "*";
      domid -= 1;
    }
    while (domid > 0)
    
    if (n > 1)
      do {
        line = "";
        for (var i = 0, len = n-2; i < len; i++) {
          line += '*';
        }
        diam = sp + line + "\n" + diam + "\n" + sp + line;
        n -= 2;
        sp += " ";
      }
      while (n > 1)
      diam += "\n";
  }
  
  return diam;
}

function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}//z.

function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }
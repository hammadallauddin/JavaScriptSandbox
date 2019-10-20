// reverse string function

function reverse1(str) {
  if(!str|| typeof str != 'string' || str.length < 2) {
    return str;
  }

  const reversed = [];
  const length = str.length-1;
  for(let i=length; i>=0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}


function reverse2(str) {
  return str.split('').reverse().join('');
}

const testString = "Hello civic";
console.log(reverse1(testString));
console.log(reverse2(testString));

//Write 2 functions to get fibonacci value one using loop and other using recursive function


function fibonacciIterative(n) {
  arr = [0,1];

  if(n>=2) {
    for(let i=2;i<=n;i++) {
      arr.push(arr[i-2]+arr[i-1]);
    }
  }
  return arr;
}


function fibonacciRecursive(n) {
  if(n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));


//Write 2 functions to get factorial one using loop and other using recursive function


function factorialIterative(n) {


  let prod = 1;
  while(n>0) {
    prod = prod * n;
    n--;
  }
  return prod;
}


function factorialRecursive(n) {
  if(n == 2) {
    return 2;
  }
  return n * factorialRecursive(n-1);
}

console.log(factorialIterative(4));
console.log(factorialRecursive(4));


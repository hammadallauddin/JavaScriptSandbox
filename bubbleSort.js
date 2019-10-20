//implement   bubble sort algorithm
const numbers = [5,6,7,2,33,44,11,53,22,1];

for(i=0; i < numbers.length; i++) {
  for(j=0; j < numbers.length; j++) {
    if(numbers[j] > numbers[j+1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j+1];
      numbers[j+1] = temp;
    }
  }
}

console.log(numbers);

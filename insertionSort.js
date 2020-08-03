  // implement insertion sort

  const numbers = [-12,5,6,7,2,33,44,11,53,22,1,0,-2,-9,8,2,1,4];
  min = numbers[0];
  i = 1;
  while(i<numbers.length) {
    if(min>numbers[i])
      for(j=i; j>0;j--){
        if(numbers[j] < numbers[j-1]){
        temp = numbers[j];
        numbers[j] = numbers[j-1];
        numbers[j-1] = temp;
        }
      }
      min = numbers[i];
    i++
  }
  console.log(numbers);




  const numbers =  [5,4,3,22,1,0,12,9,6];                    //[0,4,3,22]
  for(let i = 0; i<numbers.length; i++) {
    if(numbers[0] > numbers[i]) {
      console.log("upper i = "+i);
      numbers.unshift(numbers.splice(i,1)[0]);
      console.log("upper ans = "+numbers);
    } else {
      for(let j = 1; j < i; j++) {
        if(numbers[i] > numbers[j-1] && numbers[i] < numbers[j]) {
          numbers.splice(j,0,numbers.splice(i,1)[0]);
          console.log("inner i = "+ i + " j = " + j);
          console.log("inner ans = "+numbers);
        }
      }
    }
  }

  console.log(numbers);

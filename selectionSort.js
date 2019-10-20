  // implement selection sort

  const numbers =  [5,4,3,22,4,1,0,12,9];
                    //[0,4,3,22]
  for(let i = 0; i<numbers.length; i++) {
    let min = i;
    console.log("min 1 " + min);
    let minNum = numbers[i];
    for(j=i+1;j<numbers.length;j++) {
      if(numbers[j] < numbers[min]) {
        min = j;
        console.log("min 2 " + min);
      }
    }
    numbers[i] = numbers[min];
    console.log("numbers[i] " + numbers[i] + " i " + i);
    numbers[min] = minNum;
    console.log("numbers[min] " + numbers[min] + " minNum " + minNum + " min " + min);
  }

  console.log(numbers);

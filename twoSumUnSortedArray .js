// given a unsorted numeric array and a number 
// sum two numbers of array must be equal to the number

function twoSum(arr, num) {
  let i=0;
  let comp = [];
  let temp = [];

  while(i < arr.length) {
    let j = arr[i];
    if(comp.includes(num-j)) {
      temp.push(j);
      temp.push(num-j);
      break;
    } else {
      comp.push(j);
    }
    i++;  
  } 
  return temp;
}


const arr = [11,2,12,55,100,5,3,1];
const num = 8;

twoSum(arr, num);

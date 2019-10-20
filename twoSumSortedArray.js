// given a sorted numeric array and a number 
// sum two numbers of array must be equal to the number

function twoSum(arr, num) {
  let temp = []
  let i = 0;
  let j = arr.length-1;

  while(i<j) {

    if((arr[i] + arr[j]) == num) {
      temp.push(arr[i]);
      temp.push(arr[j]);
      break;
    } else if((arr[i]+ arr[j]) > num) {
      j--;
    } else if((arr[i]+ arr[j]) < num) {
      i++;
    }
  }
  return temp;
}


const arr = [2,3,4,6,7,8,9,10];
const num = 7;

twoSum(arr, num);

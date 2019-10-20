// merge sort

function mergeSort(arr1, arr2) {
  const mergedArray = [];

  if(arr1.length === 0) {
    return arr2;
  }

  if(arr2.length === 0) {
    return arr1;
  }

  let arrLen1 = 1;
  let arrLen2 = 1;
  let item1 = arr1[0];
  let item2 = arr2[0];

  while(item1 || item2) {
    if(item2 === undefined || item1 < item2) {
      mergedArray.push(item1);
      item1 = arr1[arrLen1];
      arrLen1++;
    } else {
      mergedArray.push(item2);
      item2 = arr2[arrLen2];
      arrLen2++;
    }
  }
  return mergedArray;
}

mergeSort([1,3,7],[2,4,6]);


//  merge sort using recursion

  // implement merge sort

  const numbers =  [5,4,3,22,1,0,12,9,6];
                    //[0,4,3,22]
  function mergeSort(array) {
    if(array.length === 1) 
      return array;
    
    const length = array.length;
    const mid = Math.floor(length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);

    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }

  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
      if(left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  console.log(mergeSort(numbers));

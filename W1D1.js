// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pseudocode
// outer for loop (var i) that starts at the length of the array decrements to 0
// inner for loop (var j) that loops from 0 to the outer loop variable (i)
// check if the arr[j+1] < arr[j]
// if so, swap the two values using a temp variable
// after outer loop finishes, return the array

function bubbleSort(nums) {
  //given an unsorted array, sort the array using bubbleSort
  // i.e. keep swapping the largest value and put it at the end
  for(let i=nums.length-1; i>=0; i--){
    for(let j=0; j<=i; j++){
      if(nums[j+1]<nums[j]){
        let temp = nums[j];
        nums[j]=nums[j+1];
        nums[j+1]=temp;
      }
    }
  }
  return nums;
}

function selectionSort(nums) {
  //given an unsorted array, sort the array using selectionSort
  // i.e. find the largest value and put it at the end
  for(let i=0; i<nums.length; i++){
    let min = nums[i];
    let min_index=i;
    for(let j=i; j<nums.length; j++){
      if(nums[j]<min){
        min = nums[j];
        min_index = j;
      }
    }
    let temp = nums[i];
    nums[i]=nums[min_index];
    nums[min_index]=temp;
  }
  return nums
}

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));



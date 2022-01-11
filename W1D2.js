// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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
    return nums;
}

// console.log(selectionSort(numsOrdered));
// console.log(selectionSort(numsRandomOrder));
// console.log(selectionSort(numsReversed));

function insertionSort(nums) {
  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the right position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted)
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j > 0; j--){
            if(nums[j] < nums[j-1]){
                let temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }
        }
    }
    return nums;
}
console.log(insertionSort(numsOrdered));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertionSort(nums) {
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

// console.log(insertionSort(numsOrdered));
// console.log(insertionSort(numsRandomOrder));
// console.log(insertionSort(numsReversed));


const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10];

// BONUS 
function merge(arr1, arr2){
    // const arr3=arr1.concat(arr2);
    // for(let i = 0; i < arr3.length; i++){
    //     for(let j = i; j > 0; j--){
    //         if(arr3[j] < arr3[j-1]){
    //             let temp = arr3[j];
    //             arr3[j] = arr3[j-1];
    //             arr3[j-1] = temp;
    //         }
    //     }
    // }
    // return arr3;
    let tempArr = [];
    while(arr1.length || arr2.length){
        if(typeof arr1[0] === 'undefined'){
            tempArr.push(arr2[0]);
            arr2.splice(0,1);
        } else if(arr1[0] > arr2[0]){
            tempArr.push(arr2[0]);
            arr2.splice(0,1);
        } else {
            tempArr.push(arr1[0]);
            arr1.splice(0,1);
        }
    }
    return tempArr;
}
// given 2 sorted array, combine them and return 1 sorted array. 
console.log(merge(sortedA1,sortedB1));
console.log(merge(sortedA2,sortedB2));
console.log(merge(sortedA3,sortedB3));
console.log(merge(sortedA4,sortedB4));
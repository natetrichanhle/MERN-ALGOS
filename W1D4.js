// function merge(arr1, arr2){
  
//   // given 2 sorted array, combine them and return 1 sorted array. 
// }

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
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

function merge(arr1, arr2){
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
// console.log(merge(sortedA1,sortedB1));
// console.log(merge(sortedA2,sortedB2));
// console.log(merge(sortedA3,sortedB3));
// console.log(merge(sortedB4,sortedA4));


const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

  //given an unsorted array, return a sorted array using mergeSort
  //HINT: keep separate the array until they are 2 sorted arrays
  //HINT2: You may need to have a recursive function
  //HINT3: Make use of the Merge function you created

function mergeSort(array) {
    const half = array.length / 2;

    // Base case or terminating case
    if(array.length < 2){
        return array; 
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}
console.log(mergeSort(numsRandomOrder));
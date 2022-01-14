
const partition = (arr,left,right) =>{
    let pivot = arr[Math.floor((left + right)/2)];  
    let i = left;
    let j = right;
    
    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        
        while(arr[j] > pivot){
            j--;
        }
        
        if(i <= j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

const quicksort = (arr,left,right) => {
    if(arr.length > 1){
        let partitionIndex = partition(arr,left,right);
        if(left < partitionIndex - 1){
            quicksort(arr,left,partitionIndex-1);
        }
        if(partitionIndex < right){
            quicksort(arr,partitionIndex,right);
        }
    }
    return arr;
}
let newArr = [1,3,5,2,4,9,8,7,6,10];
let nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
let nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
let nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
let nums4 = [2, 1];
let sortedArr = quicksort(newArr, 0, newArr.length - 1);
console.log(sortedArr);
console.log(quicksort(nums1, 0, nums1.length - 1));
console.log(quicksort(nums2, 0, nums2.length - 1));
console.log(quicksort(nums3, 0, nums3.length - 1));
console.log(quicksort(nums4, 0, nums4.length - 1));
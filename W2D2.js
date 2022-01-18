
// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

function orderedIntersection(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}
console.log(orderedIntersection(numsA3,numsB3))

// let orderedIntersection = function(nums1, nums2) {
//     let res = [];
//     for (let i = 0; i < nums2.length; i++){
//         if (nums1.includes(nums2[i])){
//             res.push(nums2[i]);
//             nums1.splice(nums1.indexOf(nums2[i]), 1);
//         }
//     }
//     return res;
// };
// console.log(orderedIntersection(numsA1,numsB1))
// console.log(orderedIntersection(numsA2,numsB2))
// console.log(orderedIntersection(numsA3,numsB3))

// function orderedIntersection(array1,array2) { 
//    var seen=[],
//        result=[];
//    for (var i = 0; i < array1.length; i++) {
//      seen[array1[i]] = true;
//    }
//    for (var i = 0; i < array2.length; i++) {
//      if ( seen[array2[i]])
//         result.push(array2[i]);
//    }
//    return result;
// }
console.log(orderedIntersection(numsA1,numsB1))
console.log(orderedIntersection(numsA2,numsB2))
console.log(orderedIntersection(numsA3,numsB3))

function orderedMultisetUnion(sortedA, sortedB) {
  //given 2 sorted array in different length, find the union of both set and return the array 
  //**** all nums that appeared in either array.

}
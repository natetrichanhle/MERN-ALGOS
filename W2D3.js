const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;


//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

//given a square matrix (2d array) of integers
// calculate the absolute difference between the sum of its diagonals
function diagonalDifference(sqrMatrix) {
    let sumForward = 0
    let sumBackward = 0
    for (let forward = 0; forward < sqrMatrix.length; forward++) {
        let backward = sqrMatrix[forward][sqrMatrix[forward].length - 1 - forward]
        sumForward += sqrMatrix[forward][forward]
        sumBackward += backward
        console.log(backward)
    }
    return Math.abs(sumForward - sumBackward)


}
console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

//Given two strings,
//return true if the first string can be built from the letters in the 2nd string
function canBuildS1FromS2(s1, s2) {
    let s1Hash = {}
    let s2Hash = {}
    for (let i = 0; i < s1.length; i++) {
        if (s1Hash.hasOwnProperty(s1[i])) {
            s1Hash[s1[i]] += 1
        }
        else {
            s1Hash[s1[i].toLowerCase()] = 1
        }
    }
    for (let j = 0; j < s2.length; j++) {
        if (s2Hash.hasOwnProperty(s2[j])) {
            s2Hash[s2[j]] += 1
        }
        else {
            s2Hash[s2[j].toLowerCase()] = 1
        }
    }
    console.log(s1Hash)
    console.log(s2Hash)
    for (key in s1Hash) {
        if (!s2Hash.hasOwnProperty(key)) {
            return false
        }
        else if (s2Hash[key] < s1Hash[key]) {
            return false
        }
    }
    return true
}




const test1V1 = "0.1";
const test1V2 = "1.1";
// expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
// expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
// expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
//  expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
// expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
//  expected6 = 1;


// Determines which version number is greater or if they are equal.
// return 1 if v1 greater, -1 if v1 smaller, 0 if equal.
function compareVersionNumbers(v1, v2) {
    if (v1 === v2) {
        return 0;
    }
    let v1_components = v1.split(".");
    let v2_components = v2.split(".");
    let len = Math.min(v1_components.length, v2_components.length);
    for (let i = 0; i < len; i++) {
        if (parseInt(v1_components[i]) > parseInt(v2_components[i])) {
            return 1;
        }
        if (parseInt(v1_components[i]) < parseInt(v2_components[i])) {
            return -1;
        }
    }
    if (v1_components.length > v2_components.length) {
        return 1;
    }

    if (v1_components.length < v2_components.length) {
        return -1;
    }
    return 0;
}
console.log(compareVersionNumbers(test1V1, test1V2))
console.log(compareVersionNumbers(test2V1, test2V2))
console.log(compareVersionNumbers(test3V1, test3V2))
console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))
console.log(compareVersionNumbers(test6V1, test6V2))

/* 
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/
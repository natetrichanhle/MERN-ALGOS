
/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";


//given an incorrectly string by combining letter count occurences
// return the correctly rehashed string alphabetized.
function rehash(s) {
    let hashTable = {}
    let tempNum = ""
    let tempLetter = ""
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            if (hashTable.hasOwnProperty(s[i])) {
                hashTable[tempLetter] += parseInt(tempNum)
                tempNum = 0
                tempLetter = s[i]
                console.log(hashTable)
            }
            else {
                hashTable[s[i]] = 0;
                if (tempLetter != "") {
                    hashTable[tempLetter] += parseInt(tempNum)
                }
                tempLetter = s[i]
                tempNum = 0
                console.log(hashTable)
            }
        }
        else {
            tempNum += s[i]
            console.log('temp' + tempNum)
        }
    }
    hashTable[tempLetter] += parseInt(tempNum)

    // For key in object
    // newstr = key
    // .sort newstr
    // for char in in newstr 
    // get key value 
    // into newer str

    return Object.keys(hashTable).sort()
}
console.log(rehash(str1));

// HINTS: isNaN(num) , parseInt(str)





// BONUS  -- longest substring


// const str1 = "abcabcbb";
// const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

//Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubString(str) { }
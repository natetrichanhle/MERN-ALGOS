//------------ Grouping Categories ---------
const objects = [
    {
        name: "Receving red packets",
        category: "fun",
    },
    {
        name: "Turnip Cake",
        category: "yummy",
    },
    {
        name: "Having never-ending feasts",
        category: "fun",
    },
    {
        name: "Everyone asks you for money",
        category: "Not fun",
    },
    {
        name: "Rice Cake",
        category: "yummy",
    },
    {
        name: "Ate too much unhealthy food",
        category: "Not fun",
    },
];


const expected = {
    fun: [
        {
            name: "Receving red packets",
            category: "fun",
        },
        {
            name: "Having never-ending feasts",
            category: "fun",
        },
    ],
    yummy: [
        {
            name: "Rice Cake",
            category: "yummy",
        },
        {
            name: "Turnip Cake",
            category: "yummy",
        },
    ],
    "Not fun": [
        {
            name: "Ate too much unhealthy food",
            category: "Not fun",
        },
        {
            name: "Everyone asks you for money",
            category: "Not fun",
        },
    ],
};


/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
function groupObjects(items, categoryKey) {
    categoryList = []
    for (obj of items) {
        for (key in obj) {
            if (obj[key] === categoryKey) {
                categoryList.push(obj)
            }

        }
    }
    return categoryList

}

// console.log(groupObjects(objects, "fun" ))
// console.log(groupObjects(objects, "Not fun" ))
// console.log(groupObjects(objects, "yummy" ))
//------------ backspace string compare---------



const S1 = "ab#c"; // ac
const T1 = "ad#c"; //ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; //""
const T2 = "c#d#"; //""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; //"c"
const T3 = "#a#c"; //"c"
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; //c
const T4 = "b"; //b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/
function backspaceStringCompare(S, T) {
    let sString = "";
    let tString = "";
    let i = 0
    for (i = 0; i < S.length; i++) {
        if (S[i] !== "#") {
            sString += S[i]
        } else if (S[i] === "#") {
            sString = sString.substring(0, sString.length - 1)
        }
    }
    for (i = 0; i < T.length; i++) {
        if (T[i] !== "#") {
            tString += T[i]
        } else if (T[i] === "#") {
            tString = tString.substring(0, tString.length - 1)
        }
    }
    console.log(sString, tString)
    if (sString === tString) {
        return true
    } else {
        return false
    }
}
console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))
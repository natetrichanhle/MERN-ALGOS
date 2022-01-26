const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
    { firstName: "John", lastName: "Fawn" },
    { firstName: "Edward", lastName: "Kim" }
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "John", lastName: "Fawn" },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
];

// Filters the given items based on the search criteria using a startsWith

function filterByKeyStartsWith(items, searchFor, searchBy) {
    let results = [];
    for (const obj of items) {
        if (obj.hasOwnProperty(searchBy)) {
            let compareString = obj[searchBy].slice(0, searchFor.length);
            if (compareString.toLowerCase() === searchFor.toLowerCase()) {
                results.push(obj);
            }
        }
    }
    return results;
}

// console.log(filterByKeyStartsWith(people, searchFor1, searchBy1));
// console.log(filterByKeyStartsWith(people, searchFor2, searchBy2));
// console.log(filterByKeyStartsWith(people, searchFor3, searchBy3));

function filterByKeyEndsWith(items, searchFor, searchBy) {
    let results = [];
    for (const obj of items) {
        if (obj.hasOwnProperty(searchBy)) {
            let compareString = obj[searchBy].slice(-searchFor.length);
            if (compareString.toLowerCase() === searchFor.toLowerCase()) {
                results.push(obj);
            }
        }
    }
    return results;
}

function filterByKeyIncludes(items, searchFor, searchBy) {
    let results = [];
    for (const obj of items) {
        if (obj.hasOwnProperty(searchBy)) {
            let isFound = true;
            let objValue = obj[searchBy].toLowerCase();
            for (let i = 0; i < objValue.length; i++) {
                if (objValue[i] === searchFor[0].toLowerCase()) {
                    for (j = 0; j < searchFor.length; j++) {
                        if (objValue[i + j] !== searchFor[j].toLowerCase()) {
                            isFound = false;
                        }
                    }
                    if (isFound) {
                        results.push(obj);
                        break;
                    }
                }
            }
        }
    }
    return results
}

function filterByKey(items, searchFor, searchBy, searchMethod) {
    if (searchMethod === "startsWith") {
        return filterByKeyStartsWith(items, searchFor, searchBy)
    }
    else if (searchMethod === "endsWith") {
        return filterByKeyEndsWith(items, searchFor, searchBy)
    }
    else if (searchMethod === "includes") {
        return filterByKeyIncludes(items, searchFor, searchBy)
    }
}

console.log(filterByKey(people, searchFor4, searchBy4, searchMethod4));

   // Filters the given items based on the search criteria using different search method
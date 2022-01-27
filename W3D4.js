const students = [
    {
        firstName: "Jane",
        lastName: "Doe",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "John",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Arya",
        lastName: "Stark",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "different naming for variables";
const expected3 = [];

function santasNaughtyList(persons, badHabit) {
    let results = [];
    for (const obj of persons) {
        for (let i = 0; i < obj.habits.length; i++) {
            if (badHabit === obj.habits[i]) {
                results.push(obj.firstName + ' ' + obj.lastName);
                break;
            }
        }
    }
    return results;
}
// 
// console.log(santasNaughtyList(students, badHabit1));
// console.log(santasNaughtyList(students, badHabit2));
// console.log(santasNaughtyList(students, badHabit3));

//Finds a list of people whose habits contain the given bad habit.
//return an array of the firstname and the lastname of them.

function santasNaughtyListFunctional(persons, badHabit) {
    let results = [];

    for (let obj of persons) {
        if (obj.hasOwnProperty("habits")) {
            for (let habit of obj["habits"]) {
                if (badHabit === habit) {
                    results.push(`${obj["firstName"]} ${obj["lastName"]}`)
                }
            }
        }
    }
    return results
}

// filter & map
console.log(santasNaughtyList(students, badHabit1));
console.log(santasNaughtyList(students, badHabit2));
console.log(santasNaughtyList(students, badHabit3));
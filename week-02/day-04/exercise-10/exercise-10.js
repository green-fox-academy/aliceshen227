'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThan4() {
    var student = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].candies > 4){
            student += students[i].name;
        }
    }
    return student;
}

function aveCandies() {
    var candies = 0;
    for (var i = 0; i < students.length; i++) {
        candies+= students[i].candies;
    }
    candies %= students.length;
    return candies;
}


console.log(moreThan4());
console.log(aveCandies());


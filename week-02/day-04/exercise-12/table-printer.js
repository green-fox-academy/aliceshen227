'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1, 'needs_cooling': true },
	{ 'captain_morgan_rum': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
]

function print() {
    var ingredientList = [];
    for (var i =0; i < ingredients.length; i++) {
        ingredientList.push(Object.keys(ingredients[i])[0]);
    }
    var max = findMax(ingredientList);
//    console.log(max);
//    console.log(ingredientList);
    printHead(max);
    printBody(max, ingredientList);
    printFoot(max);
    
}

function findMax(list) {
    var max = 0;
    for (var i =0; i < list.length; i++) {
        if (list[i].length > max) {
            max = list[i].length;
        }
    }
    return max;
}

function printHead(n) {
    console.log("+" + "-".repeat(n+2) + "+" + "-".repeat(15) + "+" + "-".repeat(10) + "+");
    console.log("| Ingredient" + " ".repeat(n-9) + "| Needs cooling | In stock |");
    console.log("+" + "-".repeat(n+2) + "+" + "-".repeat(15) + "+" + "-".repeat(10) + "+");
}

function printBody(n, list) {
    for (var i = 0; i < list.length; i++) {
        var l = list[i].length;
        var second = ingredients[i].needs_cooling;
        var string = "";
        var quantity = ingredients[i][list[i]];
        if (second === true) {
            string  = "Yes";
        }
        else {
            string = "No";
        }
        if (quantity === 0) {
            quantity = "-";
        }
        console.log("| " + list[i] + " ".repeat(n-l + 1) + "| " + string + " ".repeat(14 - string.length) + "| " + quantity + " ".repeat(9 - (quantity + "").length) + "|");
    }
}

function printFoot(n) {
    console.log("+" + "-".repeat(n+2) + "+" + "-".repeat(15) + "+" + "-".repeat(10) + "+");
}

print();
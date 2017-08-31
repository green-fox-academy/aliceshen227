'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function detail() {
    for (var i = 0; i < accounts.length; i++) {
        return accounts[i].client_name + " " + accounts[i].balance;
    }
}

function transfer(from, to, b) {
    if (from === undefined || to === undefined) {
        console.log("404 - account not found");
    }
    else {
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].account_number == from) {
                accounts[i].balance -= b;
            }
            else if (accounts[i].account_number == to) {
                accounts[i].balance += b;
            }
        }
    }
    return accounts;
}


console.log(detail());
console.log(transfer(11234543, 23456311, 99.2));
console.log(accounts);

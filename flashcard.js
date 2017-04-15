
// Pseudo Coding
// Create a BasicCard constructor. It should accept front and back arguments.
// Create a ClozeCard constructor. It should accept text and cloze arguments.
// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:

var key = require('./data.js');
var inquirer = require('inquirer');
var fs = require('fs');

var cmdInput = process.argv[2];

getInput(cmdInput);

function getInput(cmdInput, args) {
    if (logged()) {
        switch (cmdInput) {
        case 'basic':
            console.log(" Basic Cards Display Here!");
            basicCards();
            break;
        case 'cloze':
            console.log(' Cloze Cards Display Here!');
            clozeCards();
            break;
        }
    }
}


function basicCards(argument) {
	// basic code goes here

    // constructor function used to create programmer objects
    function Cards(frontOne, backOne) {
      this.frontOne = frontOne;
      this.backOne = backOne;
    }

}

Cards.prototype.printInfo = function() {
  console.log("Front: " + this.frontOne + "\nBack: " + this.backOne);
  console.log("---------------");
};

function clozeCards(argument) {
	// cloze code goes here
}









function logged() {
    // captures all command line inputs
    var inputs = process.argv.slice(2).join(" ");
    // feeeds the  data to the log file
    // appends data to the log file after each run
    fs.appendFile("log.txt", "node flashcard.js: " + inputs + "\n", function (error) {
        if (error) {
            throw error;
        }
        else {
            console.log(" The log file was updated! ");
        }
    });
    return true;
}
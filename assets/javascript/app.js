//create variables to store train info
var trainName = [];
var destination = [];
var frequency = [];
var nextArrival = [];
var minutesAway = [];

//create jquery objects for user input
var trainNameInput = $("#name");
var destinationInput = $("#destination");
var firstTimeInput = $("#first-time");
var frequencyInput = $("#frequency");

//stringify and store train info in localStorage
JSON.stringify(trainName);
JSON.stringify(destination);
JSON.stringify(frequency);
JSON.stringify(nextArrival);
JSON.stringify(minutesAway);

//link localStorage to html elements
localStorage.setItem("trainName", trainName);
localStorage.setItem("destination", destination);
localStorage.setItem("frequency", frequency);
localStorage.setItem("nextArrival", nextArrival);
localStorage.setItem("minutesAway", minutesAway);

//create on.click function to add current values of user input
//to local storage and calculate next-arrival and minutes-away

    //use user inputs to calculate nextArrival and minutesAway

    //write for loop to push input into localStorage variables

    //write for loop to display current localStorage values in train table

    //add if/else that allows user to edit existing trains using train name

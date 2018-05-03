$(document).ready(function () {

    var database = firebase.database();

    //create arrays to store train info
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

    //create on.click function to add current values of user input to train table
    var submitBtn = $("#submit-button");
    var tableBody = $("#table-body");

    submitBtn.on("click", function () {
        //creating jq objects
        var tableRow = $("<tr>");
        var trainNameTable = $("<td>");
        var destinationTable = $("<td>");
        var frequencyTable = $("<td>");

        // converting user input
        var frequencyHours;
        var frequencyMin;
        var convertedFrequency;

        frequencyHours = Number(frequencyInput.val().substr(0, frequencyInput.val().indexOf(":")));
        console.log(frequencyHours);

        frequencyMin = Number(frequencyInput.val().substr(frequencyInput.val().indexOf(":") + 1, frequencyInput.val().length));
        console.log(frequencyInput);

        convertedFrequency = Number(frequencyHours) * 60 + Number(frequencyMin);
        console.log(convertedFrequency);

        //adding user input to table objects
        trainNameTable.text(trainNameInput.val());
        destinationTable.text(destinationInput.val());
        frequencyTable.text(convertedFrequency);

        //adding user input to localStorage array
        trainName.push(trainNameInput.val());
        destination.push(destinationInput.val());
        frequency.push(convertedFrequency);

        //store stagnate train info in localStorage
        localStorage.setItem("trainNames", trainName);
        localStorage.setItem("destinations", destination);
        localStorage.setItem("frequencies", frequency);

        //creating variables for localStorage items
        var localTrainNames = localStorage.getItem("trainNames");
        var localDestinations = localStorage.getItem("destinations");
        var localFrequencies = localStorage.getItem("frequencies");

        //appending table objects to table row object
        tableRow.append(trainNameTable);
        tableRow.append(destinationTable);
        tableRow.append(frequencyTable);

        //appending table row object to table body object
        tableBody.append(tableRow);

        //use user inputs to calculate nextArrival and minutesAway

        //write for loop to push input into localStorage variables

        //write for loop to display current localStorage values in train table

        //add if/else that allows user to edit existing trains using train name

        //add if/else that prevents user from submiting form without filling out all fields
    })
});

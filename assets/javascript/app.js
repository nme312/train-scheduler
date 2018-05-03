$(document).ready(function () {

    var database = firebase.database();

    //create jquery objects for user input
    var trainNameInput = $("#name");
    var destinationInput = $("#destination");
    var firstTimeInput = $("#first-time");
    var frequencyInput = $("#frequency");

    //create on.click function to add current values of user input to train table
    var submitBtn = $("#submit-button");
    var tableBody = $("#table-body");

    database.ref().on("child_added", function (snapshot) {
        console.log(snapshot.val());
        var data = snapshot.val()

        //creating jq objects
        var tableRow = $("<tr>");

        var trainNameTable = $("<td>");
        var destinationTable = $("<td>");
        var frequencyTable = $("<td>");
        var nextTrain = $("<td>");
        var minutesAway = $("<td>");

        // converting user input
        var frequency = data.frequency;


        //adding user input to table objects
        trainNameTable.text(data.trainName);
        destinationTable.text(data.destination);
        frequencyTable.text(frequency);
        // nextTrain.text(moment(nextTrain).format("HH:mm"));
        // minutesAway.text(tMinutesTillTrain);

        //appending table objects to table row object
        tableRow.append(trainNameTable);
        tableRow.append(destinationTable);
        tableRow.append(frequencyTable);
        tableRow.append(nextTrain);
        tableRow.append(minutesAway);
        //appending table row object to table body object
        tableBody.append(tableRow);

        //use user inputs to calculate nextArrival and minutesAway

        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(data.firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log(tRemainder);

        // Minute Until Train
        var tMinutesTillTrain = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // Next Train
        var nextArrival = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextArrival).format("HH:mm"));

        console.log(moment(nextArrival).format("HH:mm"));

        nextTrain.text(moment(nextArrival).format("HH:mm"));
        minutesAway.text(tMinutesTillTrain);
    })

    submitBtn.on("click", function () {

        console.log(frequency);

        var tableValues = {
            trainName: trainNameInput.val(),
            destination: destinationInput.val(),
            frequency: frequencyInput.val(),
            firstTime: firstTimeInput.val()
        }
        console.log("object", tableValues);

        database.ref().push(tableValues);


        //add if/else that allows user to edit existing trains using train name

        //add if/else that prevents user from submiting form without filling out all fields
    })
});

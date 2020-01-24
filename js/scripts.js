$(document).ready(function() {
  $("form#form1").submit(function(event) {

    event.preventDefault();

    var inputString = ($("input#limit").val());
    console.log(inputString)
    var inputArray = inputString.split("");
    console.log(inputArray)
  });
});


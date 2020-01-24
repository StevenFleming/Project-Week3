// Backend Logic

var ifTwo = /[2]/i;
var ifThree = /[3]/i;

function ReplaceIfOne(inputString){
  var ifONe = /[1]/g;
  var beepString = string.replace(ifONe, "Beep");
  return beepString;
}


var inputString = ($("input#limit").val());
console.log(inputString)
var inputArray = inputString.split("");
console.log(inputArray)
var inputInterger = parseInt($("input#limit").val());
console.log(inputInterger)


// Frontend logic User interface
$(document).ready(function() {
  $("form#form1").submit(function(event) {

    event.preventDefault();
  });
});


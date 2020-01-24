
//find instances of one within an array and pushes beep element to array.


// function beep(one){
//   var inputArray = [];{
//     if ( ===1){
//       inputArray.push("beep");
//       console.log(inputArray)
//     }



// var inputString = ($("input#limit").val());
// console.log(inputString)



// Frontend logic User interface
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputForAllNumbers =[]
    var inputInterger = parseInt($("input#limit").val());
    for (var i = 1; i <= inputInterger; i += 1)
    console.log(i);
    {
       inputForAllNumbers.push(i);
       inputForAllNumbers.show();
  }
  });
});


// function beep(one){
//   var inputArray = [];{
//     if ( ===1){
//       inputArray.push("beep");
//       console.log(inputArray)
//     }


// inputForAllNumbers.pop()
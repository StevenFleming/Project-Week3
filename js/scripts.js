


// function translateToPL(str){

// // }
// function respondToOne(input){
//   input.replace("1","beep");
// //   console.log(onestr)
// }

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var input = $("#userInput").val();
    varOne = input.search("1");
    varTwo = input.search("2")
    varThree = input.search("3")
    var inputArray = input.split("");
    console.log(inputArray)
    var textArrayBeep =["Beep",];
    console.log(textArray)

      if (varOne >=0){
        inputArray = textArrayBeep.slice(1);
        console.log(inputArray)
    }
      


    console.log(varOne);
    // var inputArray = input.split("");
    // console.log(inputArray)
    var inputInt = parseInt($("#userInput").val());
    var output = inputArray;
  
// If (input === 1){

// }


    $("#output").text(`Translation: ${output}`)
  });
});





















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
// inputInterger = parseInt($("input#limit").val());
// if (inputInterger===1)
  



//     function convertStringToArray(inputInterger) {

//     console.log(inputInterger);
//     var inputForAllNumbers =[]
//     for (var i = 1; i <= inputInterger; i += 1)
//     console.log(i);
//        inputForAllNumbers.push(i);
//        inputForAllNumbers.show("#Show");
//   }



// $(document).ready(function() {
//   $("form#form1").submit(function(event) {
//     event.preventDefault();
//   });
// });


// function beep(one){
//   var inputArray = [];{
//     if ( ===1){
//       inputArray.push("beep");
//       console.log(inputArray)
//     }


// inputForAllNumbers.pop()



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
    var inputArray = input.split(" ");
    
    var textArrayBeep =["Beep"];
    var textArrayBoop =["Boop"];
    var textArrayDave =["I'm sorry, Dave. I'm afraid I can't do that."];


      if (input.length =1 && varThree >=0){
        inputArray = textArrayDave;
        console.log(inputArray)
    }

      if (input.length =1 && varTwo >=0){
        inputArray = textArrayBoop;
      }

      if (input.length =1 && varOne >=0){
        inputArray = textArrayBeep;
      }

      else{
        var inputInt = parseInt($("#userInput").val());
      }


    var output = inputArray;
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
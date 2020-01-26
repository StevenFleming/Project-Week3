
        // console.log(inputInt)
        // for  (var i = 0; i <= inputInt; i += 1);
        //   inputArray[i];

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
    var inputArray = []

      if (input.includes("3")){
        inputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
        console.log(inputArray)
    }

     else if (input.includes("2")){
        inputArray.push("Boop");
      }

     else if (input.includes("1")){
        inputArray.push("Beep");
      }

      else {
        inputArray.push("Beep")
        inputArray.push("Boop")
        inputArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
        var inputInt = parseInt($("#userInput").val());
          for (i= 4; i <= inputInt; i ++) {
          numberstrings= i.toString();
            if (numberstrings.includes("3")) {
              var Dave = "I'm sorry, Dave. I'm afraid I can't do that."
              inputArray[i] = Dave;
              console.log(i);
              }
              else if (numberstrings.includes("2")) {
                var Boop = "Boop"
                inputArray[i] = Boop;
                console.log(i);
                }
                else if (numberstrings.includes("1")) {
                  var Beep = "Beep"
                  inputArray[i] = Beep;
                  console.log(i);
                  }
    {
      inputArray.push([i]);
       inputArray.toString(); 
  }
      }

    var output = inputArray;
    $("#output").text(`Translation: ${output}`)
  };
});
});


// I want to create a function that searches the array for 1 , 2, 3, 
// then it replaces the text in the array at the same position with beep, boop, Im sorry
// what if i just ran Replace three times on inputForAllNumbers

// function findsReplacesOneTwoThree(){
//   inputForAllNumbers.replace(edit1 = str.replace("1", "beep"));
//   edit1.replace("2", "boop");
//   edit2.replace("3", "I'm Sorry");
// }

// numberstrings= i.toString()
// if (numberstrings.includes("3")) {
//   var Dave = "I'm sorry, Dave. I'm afraid I can't do that."
//   inputArray[i]
// }


// I want to create a function that searches the array for 1 , 2, 3, 
// then it replaces the text in the array at the same position with beep boop Im sorry
// what if i just ran Replace three times on inputForAllNumbers














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
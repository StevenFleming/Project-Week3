//Backend Logic

function computerSpeak(numb) {
  var inputArray = [];
  for (i= 1; i <= numb; i ++) {
    numberstrings= i.toString();
    if (numberstrings.includes("3")) {
      inputArray[i] = " I'm sorry, Dave. I'm afraid I can't do that. ";
      }
    else if (numberstrings.includes("2")) {
        inputArray[i] = " Boop ";
        }
    else if (numberstrings.includes("1")) {
          inputArray[i] = " Beep ";
          }
    else { 
          inputArray.push([i]);
        }
      }
      return inputArray
  }

// User Interface Logic
$(document).ready(function(){
  $("#form1").submit(function(event){
    var inputstr = ($("#userInput").val());
    $("#output").text(computerSpeak(inputstr));
    event.preventDefault();
  });
});


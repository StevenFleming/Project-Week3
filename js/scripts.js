$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var inputArray = []
    var inputstr = ($("#userInput").val());
      for (i= 1; i <= inputstr; i ++) {
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
    $("#output").text(`Translation: ${inputArray}`)
  });
});


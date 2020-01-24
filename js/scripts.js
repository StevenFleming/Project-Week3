$(document).ready(function() {
  $("form#form1").submit(function(event) {

    event.preventDefault();

    var year = parseInt($("input#limit").val());
    console.log(year)
  });
});
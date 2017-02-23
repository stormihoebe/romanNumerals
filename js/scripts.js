
var romans = ["I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [1, 5, 10, 50, 100, 500, 1000];

var numeralizeI = function(number) {
  for (var i=0;i<breaknumbers.length;i++) {
    if (number === breaknumbers[i]) {
      return romans[i];
    } else if (number < breaknumbers[i]) {
      // found largest break point
      var largestRoman = romans[i-1];
      console.log(largestRoman);
      //how many breaknumbers was in our number?
      var howManyRoman = Math.floor(number/breaknumbers[i-1]);
      console.log(howManyRoman);

      //wahts the remainder?
      var numberRemainder=(number%breaknumbers[i-1]);
      console.log(numberRemainder);

      return;
    } else if (number > 1000) {
      var largestRoman = romans[6];
      console.log(largestRoman);
      //how many breaknumbers was in our number?
      var howManyRoman = Math.floor(number/1000);
      console.log(howManyRoman);

      //wahts the remainder?
      var numberRemainder=(number%1000);
      console.log(numberRemainder);

    }
      else {
      }
    }

};



$(function(){
  $("#romanNumber").submit(function(){
    event.preventDefault();
    var output = "";
    var number = parseInt($("input#number").val());


    output = numeralizeI(number);
    console.log(output);


    // $(".output").text(output);
    // console.log(output);
  });//submit
});//jQuery

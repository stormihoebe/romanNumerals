
var romans = ["I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [1, 5, 10, 50, 100, 500, 1000];

var processing = function (number, indexOfBreak) {
  // found largest break point
  var largestRoman = romans[indexOfBreak-1];
  console.log(largestRoman);
  //how many breaknumbers was in our number?
  var howManyRoman = Math.floor(number/breaknumbers[indexOfBreak-1]);
  console.log(howManyRoman);

  //wahts the remainder?
  var numberRemainder=(number%breaknumbers[indexOfBreak-1]);
  console.log(numberRemainder);
};

var numeralizeI = function(number) {
  for (var i=0;i<breaknumbers.length;i++) {
    if (number === breaknumbers[i]) {
      return romans[i];
    } else if (number < breaknumbers[i]) {
      processing (number, i);
      return;
    } else if (number > 1000) {
      processing (number, 7);
      return;     
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

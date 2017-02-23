
var romans = ["o","I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [0, 1, 5, 10, 50, 100, 500, 1000];
var outputArray = [];
var outputString = "";

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
  if (howManyRoman === 4) {
    //if howManyRoman is 4, don't push any current romans, add previous roman, add next roman.
    // if array greater than 1, pop off end. then push.
    // if (outputArray.length > 0){
    //   outputArray.pop();
    // }
    outputArray.push(largestRoman);
    outputArray.push(romans[indexOfBreak]);
  } else {
    for (var j = 1; j <= howManyRoman; j++) {
      outputArray.push(romans[indexOfBreak-1]);
    };
  };

  if (numberRemainder === 0) {
    return;
  } else {
    numeralizeI(numberRemainder);
  };
};

var numeralizeI = function(number) {
  for (var i=0;i<breaknumbers.length;i++) {
    if (number === breaknumbers[i]) {
      outputArray.push(romans[i]);
      return;
    } else if (number < breaknumbers[i]) {
      processing (number, i);
      return;
    } else if (number > 1000) {
      processing (number, 8);
      return;
    }
      else {
      }
    }

};



$(function(){
  $("#romanNumber").submit(function(){
    event.preventDefault();
    outputString = "";
    outputArray = [];

    var number = parseInt($("input#number").val());


    numeralizeI(number);
    outputString = outputArray.join("");
    console.log(outputString);


    // $(".output").text(output);
    // console.log(output);
  });//submit
});//jQuery

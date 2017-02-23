
var romans = ["I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [1, 5, 10, 50, 100, 500, 1000];
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
//this takes care of the 9 situation

  if (numberRemainder === 4) {

    console.log("number remainder is 4, outputArray:" + outputArray);
    outputArray.pop();
    outputArray.push(romans[indexOfBreak-2]);
    outputArray.push(romans[indexOfBreak]);
    return;
  } //this takes care of the 4 IIII situation
  else if (howManyRoman === 4) {
    console.log("how many roman is 4, outputArray:" + outputArray);
    outputArray.push(largestRoman);
    outputArray.push(romans[indexOfBreak]);

  } else {
    console.log("how many roman is NOT 4, outputArray:"+outputArray);
    for (var j = 1; j <= howManyRoman; j++) {
      outputArray.push(romans[indexOfBreak-1]);
    };
  };
//  this is the end of 4 IIII
  if (numberRemainder === 0) {
    return;
  } else {
    numeralizeI(numberRemainder);
  };
};



var numeralizeI = function(number) {
  // debugger;
  for (var i=0;i<breaknumbers.length;i++) {
    if (number === breaknumbers[i]) {
      outputArray.push(romans[i]);
      return;
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

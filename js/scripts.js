
var romans = ["I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [1, 5, 10, 50, 100, 500, 1000];
var outputArray = [];
var ones=[];
var tens=[];
var hundreds=[];
var thousands=[];
var outputString = "";

var checkForRemainder = function (remainder) {
  if (remainder === 0) {
    return;
  } else {
    numeralizeI(remainder);
  };
}

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
// if number < 10 and reaminder greater than 4, then 9. do for all three p;ositons.
  // ok...we know it is "9", bevcause largest roman is 5, and symbol is IX.
  // We know it is "90" because largest roman is 50, and symbol is xc.
  // we know it is 900 because largerest roman is 500, and symbol is cm.
  //
  // why don't we just hard code these three facts in here? Check if 9 and which Largest Roman? Then code it in.
  //
  // Well Stormi, I think we are at the right place in OutputArray when we get here.   var amINine = number - numberRemainder?????

if (((number <10) && (numberRemainder > 3) || ((number < 100) && (numberRemainder > 39)) || (number <1000) && (numberRemainder > 399))){
  outputArray.push(romans[indexOfBreak-2]);
  outputArray.push(romans[indexOfBreak]);
  checkForRemainder (numberRemainder);
//The problem here with nine: After nine passes through, the second time around, howManyRoman = 4 because there are 4 I's. So it performs the else if statement below. which we do NOT want it to.
} else if ((howManyRoman === 4)) {
  console.log("numberRemainder " + numberRemainder);
  outputArray.push(largestRoman);
  outputArray.push(romans[indexOfBreak]);
  checkForRemainder (numberRemainder);
} else {
  console.log("how many roman is NOT 4, outputArray:"+outputArray);
  for (var j = 1; j <= howManyRoman; j++) {
    outputArray.push(romans[indexOfBreak-1]);
    checkForRemainder (numberRemainder);


    };
  };
//  this is the end of 4 IIII
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

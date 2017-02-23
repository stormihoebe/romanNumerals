var vowels = ["a","i","e","o","u","A","E","I","O","U"];
var findVowel = function(word){
  var lettersArray = word.split("");
  var k = 0;
  for (var i = 0; i < lettersArray.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if ((lettersArray[i] === vowels[j]) && (k === 0)) {
        k++;
        return i;
      };
    }
  }
}; //end findVowel.
var pigLatin = function(word) {
  var index = findVowel(word);
  var lettersArray = word.split("");
  var newArray =[];
  for (i =0; i < index ; i++) {
    newArray.push(lettersArray[i]);
  }
  for (i =0; i < index ; i++) {
    lettersArray.shift();
  }
  var output = lettersArray.concat(newArray).join("") + "ay";
  return output;
};//end pigLatin function


$(function(){
  $(".pigForm").submit(function(){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var output = "";
    words.forEach(function(word){
      output += pigLatin(word) + " ";
    });
    $(".output").text(output);
    console.log(output);
  });//submit
});//jQuery

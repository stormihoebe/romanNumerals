
var vowels = ["a","i","e","o","u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y", "z"];


//1. Function to slice sentence into words***
//2. function to check letters of a word, recognize when a vowel is found.***
//3. Function to create pig latin. Slice word before the vowel, add that to the end of the word, then + ay to the end of the word.
//4. pring the pig latin phrase to the page.
var findVowel = function(word){
  var lettersArray = word.split("");
  var k = 0;
  for (var i = 0; i < lettersArray.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if ((lettersArray[i] === vowels[j]) && (k === 0)) {
        // console.log("we found a vowel!", i);
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





//
// var vowelBegin = function(word){
//   // debugger;
//   for (var i=0; i < vowels.length; i++){
//       if (word.charAt(0) === vowels[i]){
//         word = word + "ay";
//         console.log(word);
//       } else {
//         if ((word.charAt(1) !== vowels[i]) && (word.charAt(2) === vowels[i])){
//           console.log("word starts with 2 consonants")
//           break;
//         } else if (word.charAt(1) === vowels[i]){
//           console.log("word starts with 1 consonant")
//           break;
//         } else if ((word.charAt(0) !== vowels[i]) && (word.charAt(1) !== vowels[i]) && (word.charAt(2) !== vowels[i])){
//         console.log("word starts with 3 consonants")
//         break;
//       };
//     };
//     };
//   };
//
//   var vowelBegin2 = function(word){
//     debugger;
//     for (var i=0; i < vowels.length; i++){
//         if (word.charAt(0) === vowels[i]){
//           word = word + "ay";
//           console.log(word);
//         } else{
//           if (word.charAt(0) !== vowels[i]){
//             if (word.charAt(1) !== vowels[i]){
//               if (word.charAt(2) !== vowels[i]){
//                 console.log("consonant 3")
//               }
//             }else{
//               console.log("cosonant 2");
//             }
//           }else{
//             console.log("consonant 1")
//           }
//         }
//       }
//     }
//
// //wordBreaker should return an array of letters from a word
// var wordBreaker = function(word){
//   var array = word.split("")
//   return array;
// };
//
//
// $(function(){
//   $(".pigForm").submit(function(){
//     event.preventDefault();
//     var sentence = $("input#sentence").val();
//     var words = sentence.split(" ");
//
//     // console.log(vowelBegin2("ute"));
//     // console.log(wordBreaker("dkaaa"))
//
//     var word = "stong";
//     vowelBegin2(word);

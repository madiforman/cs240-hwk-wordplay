var min_len = 3, max_len = 6,
guessedWords = [],
hiddenWords = [],
availableWords = [],
rootWords = [];
generate_dictionary();
get_root_words();
let startWord = availableWords[Math.floor(Math.random() * availableWords.length)];
hiddenWords = valid_combos(startWord);

startWord = scramble(startWord);




function display() {
var output = [];
console.log("Available letters: " + startWord + "\n");
for(var i = 0; i < hiddenWords.length; i++){
for (var j = 0; j < hiddenWords[i].length; j++){
    output = ("- ".repeat(hiddenWords[i].length)+"\n");
}
console.log(output);
}
}

function update_display(word){
    var output = [];
    for(var i = 0; i < hiddenWords.length; i++){
    for (var j = 0; j < hiddenWords[i].length; j++){
        output = ("- ".repeat(hiddenWords[i].length)+"\n");

    }
    output[hiddenWords.indexOf(word)] = word;
    console.log(output);
    }

}

while (guessedWords.length < hiddenWords.length){ 
    display();
    var guess = prompt("Enter a guess: ");
 if(guess == null){
    ending();
    break;
 } else if(guess == "*"){
    alert("scrambling root word...");
    startWord = scramble(startWord);
    console.log(startWord);
 } else if(guess.length < min_len){
     alert("guess is too short, try again")
 } else if(guess.length > max_len){
   alert("guess is too long, try again");
 }  else if (guessedWords.includes(guess)){
     alert ("You've already guessed: " + guess + "! Try again.")
 } else if(hiddenWords.includes(guess)){
    alert("Correct guess! you guessed " + guess);
    guessedWords.push(guess);
    console.log(guess);
 }
 else {
     alert("word does not exist, try again");
 }
} 
function ending(){
 var str = "You answered " + guessedWords.length + " out of " + hiddenWords.length + "! \n";
 console.log(str);
 for(var i = 0; i < hiddenWords.length; i++){
 console.log(hiddenWords[i]);
 }
}


function generate_dictionary(){
    for(index = 0; index < dictionary.length; index++){
        if(dictionary[index].length >= min_len && dictionary[index].length <= max_len) {
            availableWords.push(dictionary[index]);
        }
    }
}
function get_root_words(){
    for(index = 0; index < availableWords.length; index++)
    if(availableWords[index].length == max_len) {
        rootWords.push(availableWords[index]);
    }
}
function combos(str){
    var len = str.length, result = [], indx = 0;
    while(indx < len){
        var char = str.charAt(indx);
        var x;
        var arrTemp = [char];
        for(x in result) {
            arrTemp.push(""+result[x]+char);
        }
        result = result.concat(arrTemp);
        indx++;
    }
    return result;
}
function valid_combos(str){
    options = combos(startWord);
    result = [];
      for(var j = 0; j < options.length; j++){
        if(availableWords.includes(options[j])){
            result.push(options[j]);
        }
}
console.log(result);
return result;
}


function scramble(str) {
    let arr = str.split(''),
    len = arr.length;
   for (var i = 0; i < len; i++){
       let j = Math.floor(Math.random() * str.length);
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       }
   str = arr.join('');
   return str;
     }



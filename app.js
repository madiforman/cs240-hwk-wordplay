var min_len = 3, max_len = 6,
guessedWords = [],
hiddenWords = [],
availableWords = [],
rootWords = [];
generate_dictionary();
get_root_words();

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

let startWord = availableWords[Math.floor(Math.random() * availableWords.length)];

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
return result;
}



hiddenWords = valid_combos(startWord);



for(var i = 0; i < hiddenWords.length; i++){
    console.log(hiddenWords[i]); }
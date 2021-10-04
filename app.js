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
function permutations(str) {
    if(str.length < 2) {
        return str;
    }  
    var perms = [];
        for(var i = 0; i < str.length; i++){
            var char = str[i];
         if(str.indexOf(char)!= i){
             continue;
         }
         var remainingStr = str.slice(0,i) + str.slice(i+1,str.length);
         for(var sub of permutations(remainingStr)) {
             perms.push(char+sub);
         }
        }
        return perms;
}





function get_valid_perms(){
    var perms = permutations(startWord);
    for(let i = 0; i < perms.length; i++) {
        if(availableWords.includes(perms[i])){
            hiddenWords.push(perms[i])
        }
    }

}

get_valid_perms();


for(var i = 0; i < hiddenWords.length; i++){
console.log(hiddenWords[i]); }
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
function get_permutations(str) {
    let result = [];
    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        const remainingChars = str.slice(0,i) + str.slice(i+1);
        for(let j = 0; j < remainingChars.length; j++){
            result.push(currentChar + get_permutations(remainingChars));
        }
    }
    return result;
}





var permutations = get_permutations(startWord);
for(var i = 0; i < permutations.length; i++){
console.log(permutations[i]); }
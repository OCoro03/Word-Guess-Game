var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compIndex = Math.floor(Math.random() * alphabet.length);
var compChoice = alphabet[compIndex];
document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);
    if(letter === compChoice){
        alert("You Win!")
    } else {
        alert("You Lost!")
    }

}

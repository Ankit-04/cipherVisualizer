function displayAlgo(){
    var list = document.getElementById("algo-select");
    var len = list.options.length; 
    var opt;
    var selected;
    
    for ( var i = 1; i < len; i++ ) {
        opt = list.options[i];
        if ( opt.selected === true ) {
            selected = opt.value;
        }
        if(opt.value != null){
            document.getElementById(opt.value).style.display = "none";
        }
    }
    document.getElementById(selected).style.display = "flex";
}

function encrypt(){
    var list = document.getElementById("algo-select");
    var input = document.getElementById("input-string").value;
    var output;

    switch (list.selectedIndex){
        case 1:
            output = ceaserCihper(input);
            break;
        case 2:
            output = vigenereCipher(input);
            break;
    }
    document.getElementById("output-string").innerHTML = output;
}
function ceaserCihper(text){
    var letters = document.getElementById("ceaser-input-alphabet").value;
    var shift = parseInt(document.getElementById("ceaser-input-shift").value);
    var message = text.toLowerCase(); 
    var index;

    message = message.split("")
    letters = letters.split("");

    for (var i = 0; i < message.length; i++){
        if (message[i] === " "){
            continue;
        }
        index = letters.indexOf(message[i]);
        if(index === -1){
            return "Error! Message has letters not in the alphabet"
        }        
        index = (index + shift) % (letters.length);
        message[i] = letters[index] 
    }

    return message.join("");

}
function vigenereCipher(text){
    var key = document.getElementById("vigenere-input-key").value;
    var letters = document.getElementById("vigenere-input-alphabet").value;
    var message = text.toLowerCase();
    var index; 

    key = key.split();
    message = message.split();
    letters = letters.split();

    for(var i= 0; i < message.length; i++){
        if(message === ' '){
            continue;
        }
        index = letters.indexOf(message[i]);

        

        index = (index + letters.indexOf(key[i%key.length]) % (letters.length));
        message[i] = letters[index];
        console.log(message);

    }
    return message.join("");
}

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

function eyncript(){
    var list = document.getElementById("algo-select");
    var input = document.getElementById("input-string").value;
    var output;

    switch (list.selectedIndex){
        case 1:
            output = ceaserCihper(input);
            break;
        case 2:
            albertiCihper();
            break;
    }
    document.getElementById("output-string").innerHTML = output;
}
function ceaserCihper(text){
    var letters = document.getElementById("ceaser-input-alphabet").value;
    var shift = parseInt(document.getElementById("ceaser-input-shift").value);
    var message = text.toLowerCase(); 
    var len = message.length;

    message = message.split("")
    letters = letters.split("");

    for (var i = 0; i < len; i++){
        if (message[i] === " "){
            continue;
        }
        var index = letters.indexOf(message[i]);
        index = (index + shift) %26;
        message[i] = letters[index] 
    }

    return message.join("");

}
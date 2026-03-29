var dice;
//dice imae from value 1 to 6 are iven in an array, codes are from Emojipedia
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;
var t;

// for keep on canin the dice emojis
function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
    
}

function stopstart() {
    if (stopped) {
        stopped = false;
        //cane function is called here to change the image for every 0.1 seconds
        t = setInterval(change, 100);
    } else {
        clearInterval(t);
        stopped = true;
    }

}

// invoking function 
window.onload = function () {
    dice = document.getElementById('dice');
    stopstart();
}

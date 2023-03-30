const terminal = document.getElementById('terminal');
let _output;
let _input = document.getElementById("input");
let abm = "ChatGPT wrote this: <br>\
            Redzovic Iljaz is a Linux user and self-proclaimed 'autistic' enthusiast of the operating system Loonix. <br>\
            He believes in the suckless philosophy, which emphasizes minimalism and simplicity in software design. <br>\
            Redzovic is currently a student of Business Informatics at DUNP, and while he is not particularly interested in frontend development,<br>\
            he recognizes its value(I don't) in creating functional and visually appealing user interfaces for business applications. <br>\
            Despite his reluctance to write about himself, Redzovic's passion for Linux and minimalist design principles shines through in his work and daily life.";
_input.value = '';
let nizK = ["[", "guest", "@", "vitalis","]", "$ "];
let nizB = [ "#D75F5F", "#FFAF5F", "#D75F5F", "#85AFD7", "#D75F5F", "white"];
let nizhelp = ['help', 'echo', 'printf','clear', 'whoami', 'fortune', 'cowsay', 'fortune | cowsay', 'contact', 'socijala', 'guthib', 'jmatrix', 'neofetch'];
let nizhelpA = ['Print this menu', 'echo something', 'printf something to console', 'clear the screen', 'about me', 'get random quote', 
    'print something in cowsay style', 'pipe fortune into cowsay', "my email", 'Social media', 'my github page', 'kinda like cmatrix', 'More serious "whoami"'];
let inputValue, term_pre = document.getElementById("term_pre"), 
    zagrade = new Array(4);
let zz = -1;
let reg = /^echo/g;
function isUpKey(event) {
    if (event.keyCode === 38) {
        return true;
    }
    return false;
}   
function isDownKey(event) {
    if (event.keyCode === 40) {
        return true;
    }
    return false;
}
function postaviProsli(kako){
    if(kako == 'plus')
        zz++;
    else zz--;
    let len = nizkomandi.length;
    if(zz > len - 1) zz = 0;
    if (zz < 0) zz = len - 1;
    //console.log(pro);
    input.setSelectionRange(input.value.length, input.value.length);
    input.focus();
    input.value = nizkomandi[zz];
    //spusti();

}
document.addEventListener('keydown', function(event) {
    if (isUpKey(event)) {
        // up key is pressed
        postaviProsli('minus');
        event.preventDefault();
    }
    else if(isDownKey(event)){
        postaviProsli('plus');
        event.preventDefault();
    }
});
document.addEventListener("keypress", function(event) {
    if (event.charCode === 13) {
        if(input.value == 'whoami') _whoami();
        else if(input.value.match(/clear/)) _clear();
        else if(input.value.match(reg) || input.value.match(/printf/)) _echo();
        else if(input.value.match(/^\ *help/)) _help();
        else if(input.value.match(/^\ *cowsay/)) _cowsay();
        else if(input.value.match(/^\ *fortune/)) _fortune();
        else if(input.value.match(/contact/)) _kontakt("Contact me!(don't)" ,'mailto:hvalavitalisu@gmail.com');
        else if(input.value.match(/socijala/)) _kontakt('My instagram', 'https://www.instagram.com/v1tohvala');
        else if(input.value.match(/guthib/)) _kontakt('My github profile', 'https://github.com/HvalaVitalisu')
        else if(input.value.match(/jmatrix/)) jmatrix();
        else if(input.value.match(/neofetch/)) _neofetch();
        else greska();
        input.focus;
        shouldScroll = true;
    }
});


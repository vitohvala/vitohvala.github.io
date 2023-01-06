    // Get a reference to the terminal div
    const terminal = document.getElementById('terminal');
    let _output;
    let _input = document.getElementById("input");
    _input.value = '';
    let nizK = ["[ ", "guest ", "@ ", "vitalis ", "] ", "$ "];
    let nizB = [ "#D75F5F", "#FFAF5F", "#D75F5F", "#85AFD7", "#D75F5F", "white"];
    let nizhelp = ['help', 'echo', 'printf','clear', 'whoami', 'fortune', 'cowsay', 'cowsay | fortune', 'contact', 'socijala', 'guthib'];
    let nizhelpA = ['Print this menu', 'echo something', 'printf something to console', 'clear the screen', 'about me', 'get random quote', 
                    'print something in cowsay style', 'pipe fortune into cowsay', "my email", 'drustvene mreze', 'my github page'];
    let inputValue, term_pre = document.getElementById("term_pre"), 
    zagrade = new Array(4);
    let zz = -1;
    let reg = /^echo/g;
    //let term_in = document.createElement('div');
   function isUpKey(event) {
        if (event.keyCode === 38 || event.key === 'ArrowUp') {
            return true;
        }
        return false;
    }   
    function isDownKey(event) {
        if (event.keyCode === 39 || event.key === 'ArrowDown') {
            return true;
        }
        return false;
    }
    function postaviProsli(kako){
        if(kako == 'plus')
            zz++;
        else zz--;
        let len = document.querySelectorAll('#term_pre .prosli').length;
        if(zz > len) zz = 0;
        if (zz < 0) zz = len;
        let prosle_komande = new Array(len);
        //console.log(pro);
        prosle_komande[0] = '';
        for(let i = 1; i <= len; i++){
            prosle_komande[i] = document.getElementsByClassName('prosli')[i - 1].innerHTML;
        }
        //console.log(prosle_komande[len - zz]);
        input.value = prosle_komande[len - zz];
        //spusti();
    }
    document.addEventListener('keydown', function(event) {
        if (isUpKey(event)) {
        // up key is pressed
            postaviProsli('plus');
        }
        else if(isDownKey(event)){
            postaviProsli('minus');
        }
    });
    document.addEventListener("keypress", function(event) {
        if (event.charCode === 13) {
            //console.log("radi");
           // temp = _input.value;
           // _input.value = '';
            input.scrollIntoView();
            if(input.value == 'whoami') _whoami();
            else if(input.value == 'clear') _clear();
            else if(input.value.match(reg) || input.value.match('printf')) _echo();
            else if(input.value == 'help') _help();
            else if(input.value.match(/^cowsay/g)) _cowsay();
            else if(input.value == 'fortune') _fortune();
            else if(input.value == 'contact') _kontakt("Contact me!(don't)" ,'mailto:hvalavitalisu@gmail.com');
            else if(input.value == 'socijala') _kontakt('My instagram', 'https://www.instagram.com/v1tohvala');
            else if(input.value == 'guthib') _kontakt('My github profile', 'https://github.com/HvalaVitalisu')
            else greska();
        }
        //if(isUpKey(event)) postaviProsli();

    });

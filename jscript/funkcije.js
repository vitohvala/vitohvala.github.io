let nizkomandi = [];
nizkomandi[0] = '';
function spusti(term_in){
    
    nizkomandi[nizkomandi.length] = input.value;

    inputValue = document.createElement("label");
    for(let i = 0; i < nizK.length; i++){
        zagrade[i] = document.createElement("label");
        zagrade[i].innerHTML = nizK[i];
        zagrade[i].style.color = nizB[i];
        term_in.appendChild(zagrade[i]);
    }
    let temp_val = input.value;
    inputValue.innerHTML = temp_val.replace(/\s/g, '&nbsp;');
    inputValue.style.color = "white";
    inputValue.className = 'prosli';
    term_in.appendChild(inputValue);
    term_pre.appendChild(term_in);
}
function _help(){
    let hel = new Array(nizhelp.length);
    let dvadva = new Array(nizhelp.length);
    term_in = document.createElement('div');
    let temmp = document.createElement('label');
    spusti(term_in);
    temmp.innerHTML = '<br>';
    term_in.appendChild(temmp);
    for(let i = 0; i < hel.length; i++){
        hel[i] = document.createElement("span");
        hel[i].innerHTML = nizhelp[i];
        hel[i].className = 'Helpmenu';
        dvadva[i] = document.createElement("p");
        dvadva[i].appendChild(hel[i]);
        dvadva[i].innerHTML += nizhelpA[i];
        dvadva[i].className = 'StaRadi';
        term_in.appendChild(dvadva[i]);
    }
    term_pre.appendChild(term_in);
    input.value = '';
}
function _clear(){
    let asciipocetak = document.getElementById('Prikaz_na_pocetku');
    term_pre.innerHTML = '';
    asciipocetak.innerHTML = '';
    input.value = '';

    console.clear();
}
function _fortune() {
    term_in = document.createElement('div');
    let reg_cow = (/fortune\ *\|{1}\ *cowsay/g);
    let sem = 0;
    if (input.value.match(reg_cow)) {
        sem = 1;
    }
    spusti(term_in);
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedQuote = data[randomIndex];
            if (sem == 1) {
                const okolo = document.createElement('div');
                const quote = document.createElement('p');
                const cowASCII = document.getElementById("cow_ASCII").textContent;
                let drugakrava = document.createElement("pre");
                drugakrava.textContent = cowASCII;
                okolo.className = 'cow';
                quote.innerHTML = selectedQuote.text;
                drugakrava.className = "cowsay_asciiart";
                okolo.appendChild(quote);
                term_in.appendChild(okolo);
                term_in.appendChild(drugakrava);
                term_pre.appendChild(term_in);

            } else {
                _output = document.createElement('p');
                _output.innerHTML = selectedQuote.text;
                term_in.appendChild(_output);
                term_pre.appendChild(term_in);
            }
        })
        .catch(error => console.error(error));
    input.value = '';
    input.focus();
}

function _cowsay() {
    term_in = document.createElement('div');
    const okolo = document.createElement('div');
    const quote = document.createElement('p');
    const cowASCII = document.getElementById("cow_ASCII").textContent;
    let drugakrava = document.createElement("pre");
    drugakrava.textContent = cowASCII;
    okolo.className = 'cow';
    drugakrava.className = "cowsay_asciiart";
    spusti(term_in);
    quote.innerHTML = input.value.replace(/^cowsay/, '');
    //cowASCII.style.display = "block";
    okolo.appendChild(quote);
    term_in.appendChild(okolo);
    term_in.appendChild(drugakrava);
    term_pre.appendChild(term_in);
    input.value = '';
    input.focus;
}

function _echo() {
    term_in = document.createElement('div');
    _output = document.createElement("p");
    spusti(term_in);
    inputValue = input.value;
    if(inputValue.match(/^printf/)) 
        console.log(inputValue.replace(/^printf/, ''));
    else if(inputValue.match(reg))
        _output.innerHTML = inputValue.replace(reg, '');
    term_in.appendChild(_output);
    term_pre.appendChild(term_in);
    input.value = '';

}

function greska(){
    term_in = document.createElement('div');
    _output = document.createElement("p");

    _output.innerHTML = "command not found: "  + input.value;
    spusti(term_in);
    term_in.appendChild(_output);
    term_pre.appendChild(term_in);
    input.value = '';
}
function _whoami(){
    let term_in = document.createElement('div');
    _output = document.createElement("p");
    spusti(term_in);
    _output.innerHTML = 'ja sam taj';
    
    term_in.appendChild(_output);
    term_pre.appendChild(term_in);
    _input.value = '';
}
function _kontakt(naziv_linka, link){
    let term_in = document.createElement('div');
    spusti(term_in);
    _output = document.createElement('a');
    let temp = document.createElement('br');
    let linkTemp = document.createTextNode(naziv_linka);
    _output.appendChild(linkTemp);
    _output.href = link;
    term_in.appendChild(temp);
    term_in.appendChild(_output);
    term_pre.appendChild(term_in);
    input.value = '';
}
function vratiNakonJ(){
    let asciipocetak = document.getElementById('Prikaz_na_pocetku');

    let ekran = document.getElementById('jmatrix');
    terminal.style.display = 'block';
    term_pre.style.display = 'block';
    asciipocetak.style.display = 'block'
    ekran.style.display = 'none';
    input.focus();
    input.value = '';
}
function pisiK(){
    let ekran = document.getElementById('jmatrix');
    ekran.style.display = 'block';
    let karakteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let kolone = [];
    var fontSize = 5;
    var ctx = ekran.getContext("2d");
    var brkol = ekran.width / fontSize;

    for (var i = 0; i < brkol; i++) {
        kolone[i] = Math.floor(Math.random() * ekran.height);
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, ekran.width, ekran.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";


    for (var i = 0; i < brkol; i++) {
        var char = karakteri[Math.floor(Math.random() * karakteri.length)];
        ctx.fillText(char, i * fontSize, kolone[i] * fontSize);
        kolone[i]++;
        if (kolone[i] * fontSize > ekran.height && Math.random() > 0.975) {
            kolone[i] = 0;
        }
    }

}
function jmatrix(){
    let term_in = document.createElement('div');
    spusti(term_in);
    term_pre.appendChild(term_in);
    let asciipocetak = document.getElementById('Prikaz_na_pocetku');
    terminal.style.display = 'none';
    term_pre.style.display = 'none';
    asciipocetak.style.display = 'none';

    let inter = setInterval(pisiK, 20);
    document.addEventListener("keydown", function(event) {
        if (event.key === "q") {
            clearInterval(inter);
            vratiNakonJ();
        }
    });

}

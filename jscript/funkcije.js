let nizkomandi = [];
nizkomandi[0] = '';
function spusti(term_in){
    
    nizkomandi[nizkomandi.length] = input.value;

    inputValue = document.createElement("label");
    for(let i = 0; i < nizK.length; i++){
        zagrade[i] = document.createElement("label");
        zagrade[i].innerHTML = nizK[i];
        zagrade[i].style.color = nizB[i];
        zagrade[i].className = 'PS1-prosli';
        term_in.appendChild(zagrade[i]);
    }
    let temp_val = input.value;
    inputValue.innerHTML = temp_val.replace(/\s/g, '&nbsp;');
    if (input.value.match(/cowsay/g)) inputValue.innerHTML += '<br>';
    inputValue.style.color = "#83a598";
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
    clearkom = true;
    let asciipocetak = document.getElementById('Prikaz_na_pocetku');
    term_pre.innerHTML = '';
    asciipocetak.innerHTML = '';
    input.value = '';
    let dobrodoslica = document.getElementById('dobrodoslica');
    dobrodoslica.style.display = 'none';

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
function _neofetch(){
    term_in = document.createElement('div');
    spusti(term_in);
    let neofprehtml = document.getElementById("neofetchh").textContent;
    let neo = document.createElement('pre');
    neo.className = "neo";
    neo.textContent = neofprehtml;
    term_in.appendChild(neo);
    term_pre.appendChild(term_in);
    input.value = '';
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
    _output.innerHTML = abm; 
    term_in.appendChild(_output)
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
    let Napoleon = document.getElementById('dobrodoslica');
    terminal.style.display = 'block';
    term_pre.style.display = 'block';
    if(clearkom == false){
        Napoleon.style.display = 'block';
        asciipocetak.style.display = 'block'
    }
    ekran.style.display = 'none';
    input.focus();
    input.value = '';
    input.disabled = false;
}

function pisiK(){
    let ekran = document.getElementById('jmatrix');
    ekran.width = window.innerWidth; 
    ekran.height = window.innerHeight
    ekran.style.display = 'block';
    let karakteri = "@#$%&*_+?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let kolone = [];
    var fontSize = 25;
    var ctx = ekran.getContext("2d");
    var brkol = 500;

    for (var i = 0; i < brkol; i++) {
        kolone[i] = Math.floor(Math.random() * ekran.height);
    }

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, ekran.width, ekran.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";


    for (var i = 0; i < brkol; i++) {
        let char = karakteri[Math.floor(Math.random() * karakteri.length)];
        ctx.fillText(char, i * fontSize, kolone[i]);
        kolone[i] += fontSize; 
        if (kolone[i] > ekran.height && Math.random() > 0.975) {
          kolone[i] = Math.floor(Math.random() * -ekran.height);
        }
    }
}
function jmatrix(){
    let term_in = document.createElement('div');
    spusti(term_in);
    term_pre.appendChild(term_in);
    let asciipocetak = document.getElementById('Prikaz_na_pocetku');
    let Napoleon = document.getElementById('dobrodoslica');
    terminal.style.display = 'none';
    term_pre.style.display = 'none';
    asciipocetak.style.display = 'none';
    Napoleon.style.display = 'none';
    input.value = '';
    input.disabled = true;

    let inter = setInterval(pisiK, 100);
    document.addEventListener("keydown", function(event) {
        if (event.key === "q") {
            clearInterval(inter);
            vratiNakonJ();
            input.value = '';
        }
    });
}

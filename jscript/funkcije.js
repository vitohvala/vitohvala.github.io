function spusti(term_in){
    //term_in = document.createElement('div');

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
    term_in = document.createElement('div');
    let temmp = document.createElement('label');
    spusti(term_in);
    temmp.innerHTML = '<br>';
    term_in.appendChild(temmp);
    for(let i = 0; i < hel.length; i++){
        hel[i] = document.createElement("label");
        hel[i].innerHTML = nizhelp[i] + ' &nbsp &nbsp -- &nbsp &nbsp' + nizhelpA[i] + '<br>';
        hel[i].style.color = 'white';
        term_in.appendChild(hel[i]);
    }
    term_pre.appendChild(term_in);
    input.value = '';
}
function _clear(){
    term_pre.innerHTML = '';
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
    //focus();
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

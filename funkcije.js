function spusti(term_in){
    //term_in = document.createElement('div');

    inputValue = document.createElement("label");
    for(let i = 0; i < nizK.length; i++){
        zagrade[i] = document.createElement("label");
        zagrade[i].innerHTML = nizK[i];
        zagrade[i].style.color = nizB[i];
        term_in.appendChild(zagrade[i]);
    }
    //term_pre.appendChild(PS1);
    inputValue.innerHTML = _input.value;
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
function _fortune(){
    term_in = document.createElement('div');
    _output = document.createElement("p");
    var rand_index = Math.floor(Math.random() * quotes.length);;
    var q = quotes[rand_index];
    if(!(input.value.match(/cowsay/g))){
        spusti(term_in);
        _output.innerHTML = q;
        term_in.appendChild(_output);
        term_pre.appendChild(term_in);
    }
    else return q;
   // console.log(q);
    input.value = '';
}
function _cowsay(){
    //inputValue = input.value.replace(/^cowsay/g, '');
    term_in = document.createElement('div');
    let okolo = document.createElement('div');
    let quote = document.createElement('p');
    let krava = document.createElement('label');
    okolo.className = 'cow';
    //console.log(inputValue);
    spusti(term_in);
    if(input.value.match(/\| fortune/g)){
        quote.innerHTML = _fortune();
    }
    else quote.innerHTML = input.value.replace(/^cowsay/, '');
	console.log(inputValue.innerHTML);
    krava.innerHTML = cowsay;
    krava.className = 'zapravo_krava';
    okolo.appendChild(quote);
    term_in.appendChild(okolo);
    term_in.appendChild(krava);
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

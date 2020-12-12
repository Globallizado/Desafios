import stringTransforms from './modules.js';

function confirm(){
    let inp = document.querySelector('#valor');
    let str = inp.value;
    let res = document.querySelector('#resultado');
    
    res.style.border = "2px solid white"
    res.style.color = "black";
    res.style.background = "whitesmoke";
    res.style.borderRadius = "10px";

    if(str.length == 1) {
        document.getElementById('valor').style.border = '2px solid #F5054F';
        res.innerHTML = 'A string precisa ser maior do que 1 caractere :)'
    } else if (str.length <= 0) {
        document.getElementById('valor').style.border = '2px solid #F5054F';
        res.innerHTML = 'Nenhum Valor inserido, retornando...'
    } else {
        res.innerHTML = "Transformando..."
        res.innerHTML = stringTransforms.transform(str);
    }
}

$('#botaofinal').on('click', confirm)
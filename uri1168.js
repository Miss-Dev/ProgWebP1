var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
/*A linha 1 muda para enviar no URI, pois o arquivo utilizado acima 
é utilizado para testar entradas */
var n = parseInt(lines.shift());
let numero = "";
for(var i = 0; i < n; i++) {
    numero = lines.shift().split("");
    let quantidade = 0;
    for(var j = 0; j < numero.length; j++) {
        quantidade = verificarQuantidadeLeds(numero[j], quantidade);
    }
    
    console.log(quantidade+" leds");
    
}

function verificarQuantidadeLeds(num, quant){    
    if(num=='1')
        quant+=2;
    else if(num=='2' || num=='3' || num=='5')
        quant+=5;
    else if(num=='4')
        quant+=4;
    else if(num=='6'|| num=='0' || num=='9')
        quant+=6;
    else if(num=='7')
        quant+=3;
    else if(num=='8')
        quant+=7;
    return quant;
}
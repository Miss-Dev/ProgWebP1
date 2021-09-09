var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
// A primeira linha do código tem um caminho diferente do enviado no URI,
//pois o arquivo file.txt, foi utilizado localmente para testes de entrada.
let alfabeto = lines.shift();

while(alfabeto){         
    
    
    let frase = lines.shift();  
    let conjuntoLetras = new Set(alfabeto.split(""));
    let calc = contaOcorrencias(frase, conjuntoLetras);
    console.log(calc);
        
    alfabeto = lines.shift();     

}

function contaOcorrencias(str, conjunto){
    var cont = 0;
    for(var i = 0; i < str.length; i++){
        if(conjunto.has(str[i])){
            cont++;
        }  
    }
    return cont;
}

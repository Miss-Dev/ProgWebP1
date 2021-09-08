var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
// A primeira linha do código tem um caminho diferente do enviado no URI,
//pois o arquivo file.txt, foi utilizado localmente para testes de entrada.

var n = parseInt(lines.shift());
let frase = '';
for(var i = 0; i < n; i++){
    frase = lines.shift().split(" ");
       
    frase = frase.map(line => {        
        if(line.length <= 12 && line.slice(1, 9).toLowerCase() == 'oulupukk'){
            if(line.length > 10)
                return "Joulupukki"+"."
            return "Joulupukki";
        }
        return line;
    });
    console.log(frase.join(" "));
    


}
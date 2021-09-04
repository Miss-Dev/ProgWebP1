var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
/*A linha 1 muda para enviar no URI, pois o arquivo utilizado acima 
é utilizado para testar entradas */
var n = parseInt(lines.shift());


for (var i = 0; i < n; i++) {
    let texto = lines.shift().split("");
    
    texto = texto.map(e => {
        if (e.toLowerCase() != e.toUpperCase())
            return String.fromCharCode(e.charCodeAt(0) + 3);        
        else
            return e;   
    
    });
    texto = texto.reverse();
    tamanhoTexto = texto.length;
    t = parseInt(tamanhoTexto/2);
    while(t < tamanhoTexto){
        texto[t] = String.fromCharCode(texto[t].charCodeAt(0) - 1);
        t++;
    }

    console.log(texto.join(""));
}


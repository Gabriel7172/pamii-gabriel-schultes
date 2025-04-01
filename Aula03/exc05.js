var palavra = prompt("Escreva uma palavra: ");
var escolha = prompt("escolha uma letra para ser contada: ");
var contagem = 0;
 
 for (let j = 0; j < palavra.length; j++) {
     if (palavra[j] == escolha) {
         contagem++;
     }

 }
 

 console.log("(5) A LETRA '" + escolha + "' É REPETIDA: " + contagem + " VEZES!"); 


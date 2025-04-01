const n = parseInt(prompt("Digite o numero"));


for (let i = n-1; i>1 ; i--){

    if (n % i == 0) {
        window.alert("NÚMERO NÃO PRIMO")
        break; 
    }
    
    
}      
        window.alert("NÚMERO PRIMO")



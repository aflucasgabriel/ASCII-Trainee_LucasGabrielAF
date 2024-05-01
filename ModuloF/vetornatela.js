let valores = [8, 1, 5, 68, 3, 6, 25] 
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição ${pos}: ${valores[pos]}`);
    
}
*/

//console.log("Outro for\n\n")
for (let pos in valores) {
    
    console.log(`Posição ${pos}: ${valores[pos]}`);
}

console.log(valores.indexOf(22));






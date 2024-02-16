/*  Jeito tradicional: nesse bloco abaixo ele vai dizer qual posição cada elemento ta
para não precisar ficar repetindo o console.log.

let valores = [8,1,7,4,2,9]

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

// Temos outro jeito mais simples de fazer o modelo acima, usando o FOR IN

let valores = [8,1,7,4,2,9]
for (let pos in valores) { //lê se: para cada posição dos valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
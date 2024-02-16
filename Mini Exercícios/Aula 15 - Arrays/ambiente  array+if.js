let num = [5,8,2,9,3]
console.log(num)
console.log(`A array tem um total de ${num.length}.`)
console.log(`A segunda posição do vetor, é o elemento ${num[1]}.`)
let pos = num.indexOf(8) // o indexOf, é para ele procurar um indice para você
// se ele não encontrar um valor, ele vai retornar como resultado -1

if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor procurado é o elemento ${pos}.`)
}
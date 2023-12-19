let numbers = [];
let num;
let i;
let quantidadeArray = parseInt(prompt('Quantos números deseja colocar no array?'));

for(i = 0; i < quantidadeArray; i++){
    num = parseInt(prompt('Digite um número: '))
    numbers[i] = num;
}

console.log(numbers)
console.log(numbers.reverse(i))

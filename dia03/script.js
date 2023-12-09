let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let altura = parseFloat(prompt('Digite sua altura: '));
let peso = parseFloat(prompt('Digite seu peso: '));

let anoNasc = (2023 - idade);
let IMC = peso/(altura * altura);

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + ' de altura' + ', pesa ' + peso + ' e seu IMC é de: ' + IMC);

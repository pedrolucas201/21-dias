let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite outro número: '));
let operacao = parseInt(prompt('Deseja usar qual operação?'
    + '\n1 = +; \n2 = -; \n3 = *; \n4 = /;'));

switch(operacao){
    case 1: 
        console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
        break;
    case 2:
        console.log(num1 + ' - ' + num2 + ' = ' + (num1-num2))
        break;
    case 3:
        console.log(num1 + ' * ' + num2 + ' = ' + (num1*num2))
        break;
    case 4:
        console.log(num1 + ' / ' + num2 + ' = ' + (num1/num2))
        break;
    default:
        console.log('Operação inexistente.')
        break;
}
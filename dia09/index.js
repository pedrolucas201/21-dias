//EXERCICIO 1 DoDev 21 dias - DADOS DE USUÁRIO


let condicao = true;
do{
console.log('========================================================================')
let nome = prompt('Digite seu nome');
let idade = parseInt(prompt('Digite sua idade'));
let peso = Number(prompt('Digite seu peso'));
let altura = Number(prompt('Digite sua altura'));
let profissao = prompt('Digite sua profissão');

console.log('Olá, ' + nome + '! você tem ' + idade + ' anos' + ', é ' + profissao + ', tem ' + altura + 'm de altura' + ' e pesa ' + peso + 'kg.')

if(idade >= 18){
    console.log('Está liberado para tomar um gelo')
}else{
    console.log('Não pode tomar gelo não fiote')
}

let meses = 12 * idade;
let semanas = 52 * idade;
let dias = 365 * idade;
console.log('Você tem exatos ' + meses + ' meses, ' + semanas + ' semanas e ' + dias + ' dias de vida.')

let IMC = peso / (altura * altura);

if(IMC < 18.5){
    console.log('Você está magro demais!!')
}else if(IMC >= 18.5 && IMC <= 24.9){
    console.log('Você está no peso ideal.')
}else if(IMC > 24.9 && IMC <= 30){
    console.log('Você está acima do peso')
}else{
    console.log('Você está obeso.')
}

console.log('Você nasceu no ano de: ' + (2023 - idade));

let anoNasc = 2023 - idade;

for(let i = 0; i <= idade; i++){
    console.log(anoNasc + ' - ' + i + ' anos de idade.')
    anoNasc += 1;
}

let continuar = prompt('Deseja inserir novos dados ou finalizar o programa? \n[1] = Inserir novos dados \n[2] = Finalizar o programa')
if(continuar == 1){
    condicao = true;
}else{
    condicao = false;
}
}while(condicao == true){
    let continuar = prompt('Deseja inserir novos dados ou finalizar o programa? \n[1] = Inserir novos dados \n[2] = Finalizar o programa')
if(continuar == 1){
    condicao = true;
}else{
    condicao = false;
    console.log('Programa encerrado.')
}
}
// CRIANDO VARIÁVEIS E LOOP
let condicao = 2;
let salarioAtual;

while(condicao != 1){
    console.log('================================================================')
    let nome = prompt('Digite seu nome')
    let idade = parseInt(prompt('Digite sua idade'))
    salarioAtual = parseFloat(prompt('Digite seu salário atual'))

    console.log('Olá, ' + nome + '! você tem ' + idade + ' anos de idade e recebe R$' + salarioAtual + ' de salário atualmente.')

    condicao = prompt('Confira todas informações acima, está tudo correto? \n[1] = Sim \n[2] = Não, quero corrigir')
}

// PREVENDO O SALÁRIO EM 10 ANOS
let aumento = 1.015;
console.log('Agora vamos ver o aumento do seu salário em 10 anos.')

for(let i = 1; i <= 10; i++){
    salarioAtual = salarioAtual * aumento;  
    console.log('Salário em: ' + (2023 + i) + ' - R$ ' + salarioAtual)
    aumento *= 2;

}
    

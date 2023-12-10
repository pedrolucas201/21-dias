let nome;
let cpf; 
let saldo = 0;
let continuar;
let maiorValor = 0;
let media = 0;
let qtdInseridos = 0;

nome = prompt('Digite seu nome: ')
cpf = Number(prompt('Digite seu CPF: '))

do{
    let opcao = Number(prompt('Escolha umas da opções: \n[1] = Saque \n[2] = Depósito'))

    if(opcao == 1){
        let saque = Number(prompt('Olá '+ nome + ', Digite o valor que quer sacar:  \nSaldo: ' + saldo))

        if(saldo >= saque && saque > 0){
            saldo -= saque
            if(saque > maiorValor){
                maiorValor = saque;
            }
            media += saque;
            qtdInseridos += 1;
            console.log('Saque realizado. Novo saldo: ' + saldo)
        }else if(saldo < saque){
            console.log('Você não possui saldo disponível para saque. \nSaldo: ' + saldo)
        }else{
            console.log('Error')
        }
    }else if(opcao == 2){
        let deposito = Number(prompt('Olá ' + nome + ', digite o valor que quer depositar:  \nSaldo: ' + saldo))
        if(deposito > 0 && deposito > maiorValor){
            saldo += deposito;
            maiorValor = deposito;
            media += deposito
            qtdInseridos += 1;
            console.log('Depósito realizado. Novo saldo: ' + saldo)
        }else{
            console.log('Depósito não realizado.')
        }
    }else{
        console.log('Opção indisponível.')
    }
    continuar = prompt('Deseja continuar? \n[1] -> Sim \n[2] -> Não')
    if(continuar == 1){
        continuar = 1;
    }else{
        continuar = 2;
        console.log('Olá, ' + nome + '\nCPF: ' + cpf + '\nSaldo total: ' + saldo + '\nMaior valor inserido: ' + maiorValor + '\nMédia dos valores: ' + media/qtdInseridos)
    }
}while(continuar === 1){
    console.log('Fim do Do-While')
}
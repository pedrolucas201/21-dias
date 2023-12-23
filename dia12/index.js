let nomes = []
let senhas = []
let continuar = true
let contador = 0;
let encontrado = false;

while(continuar){
    let opcao = parseInt(prompt('Olá Usuário, deseja \n[1] = Cadastrar \n[2] = Fazer login \n[3] = Excluir \n[4] = Encerrar programa'))
    
    if(opcao == 1){

        let nome = prompt('Digite seu nome')
        nomes[contador] = nome
        let senha = prompt('Digite sua senha')
        senhas[contador] = senha
        
        contador++

    }else if(opcao == 2){

        let nome = prompt('Digite seu nome')
        let senha = prompt('Digite sua senha')
        for(let i = 0; i < nomes.length; i++){
            if(nomes[i] === nome && senhas[i] === senha){
                encontrado = true;
                break;
            }
        }

        if(encontrado == true){
            console.log('Sucesso')
        }else{
            console.log('Login ou Senha incorretos')
        }

    }else if(opcao == 3){

        let nome = prompt('Digite seu nome')
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0;

        for(let i = 0; i < nomes.length; i++){
            if(nomes[i] === nome){
                alert('Exlcuido com sucesso!!')
                break;
            }else{
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = senhas[i]
                contadorAux++
            }
        }

        nomes = nomesAux
        senhas = senhasAux
        contador--

    }else if(opcao == 4){
        continuar = false;
    }else{
        alert('Opção Inválida!!')
    }

}
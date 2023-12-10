let sexo;
let nota = 0;
let condicao = true;
let sexoM = 0
let mediaSexoF = 0
let qtdSexoF = 0;
let maiorNotaH = 0
let media = 0
let qtdNotas = 0
let condicao2 = true
let notas = 0;

while(condicao){
    nota = Number(prompt('Insira a nota do aluno: '))
    notas += nota
    console.log(notas)
    qtdNotas += 1

    sexo = prompt('Insira o sexo do aluno:  \n1 = Masculino \n2 = Feminino')

    if(sexo == 1){
        sexoM += 1
        maiorNotaH = nota
    }else if(sexo == 2 && nota > 7){
        mediaSexoF += nota
        qtdSexoF += 1;
    }else{
        console.log('Não existe.')
        condicao = false;
    }

    let continuar = prompt('Deseja continuar?  \n1= Sim \n2= Não');
    
    if(continuar == 1){
        while(condicao2){
            notas += Number(prompt('Digite a outra nota: '));
            console.log(notas)
            qtdNotas += 1
            sexo = prompt('Insira o sexo do aluno:  \n1 = Masculino \n2 = Feminino')
            if(sexo == 1){
                sexoM += 1
                maiorNotaH = nota
            }else if(sexo == 2 && nota > 7){
                mediaSexoF += nota
                qtdSexoF += 1;
            }else{
                console.log('Não existe.')
                condicao = false;
            }
            
            let continuar2 = prompt('Deseja adcionar outra nota?  \n1= Sim \n2= Não')

            if(continuar2 == 1){
                notas += Number(prompt('Digite mais outra nota: '));
                qtdNotas = qtdNotas + 1
                sexo = prompt('Insira o sexo do aluno:  \n1 = Masculino \n2 = Feminino')
                if(sexo == 1){
                    sexoM += 1
                    maiorNotaH = nota
                }else if(sexo == 2 && nota > 7){
                    mediaSexoF += nota
                    qtdSexoF += 1;
                }else{
                    console.log('Não existe.')
                    condicao = false;
                }
                let continuar3 = prompt('Deseja adcionar mais alguma nota?  \n1= Sim \n2 = Não')
                if(continuar3 == 1){
                    condicao2 = false;
                }else{
                    condicao2 = false;
                    condicao = false;
                }
                }else{
                    condicao2 = false;
                    condicao = false;
                }
        }
    }else{
        condicao = false;
        condicao2 = false;
    }
    
}
media = (notas)/qtdNotas
console.log('Média: ' + media + '\nQuantidade de Homens: ' + sexoM + '\nMulheres acima da média 7: ' + mediaSexoF/qtdSexoF + '\nMaior nota entre os homens: ' + maiorNotaH + '\nQuantidade de notas: ' + qtdNotas + '\nTotal Notas: ' + notas)
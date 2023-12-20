////////////////////////////////////////////////
///////       AVALIAÇÃO DA TURMA        ///////
//////////////////////////////////////////////


//CRIANDO VARIAVEIS
let nomes = [];
let notas = [];
let continuar = true;
let contador = 0
let media = 0;

alert('Portal do Aluno')

//CRIANDO LOOP
while(continuar){
    let nome = prompt('Digite o nome do aluno')
    let nota = parseFloat(prompt('Digite uma nota'))
    nomes[contador] = nome;
    notas[contador] = nota;
    media += nota;

    let desejaContinuar = prompt('Deseja inserir mais algum aluno? \n[1] = Sim')
    if(desejaContinuar != '1'){
        continuar = false;
    }
    contador++
}
//EXIBINDO VALORES
console.log(nomes)
console.log(notas)
console.log(media/notas.length)
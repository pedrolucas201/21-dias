////////////////////////////////////////////////
///////       CONCESSIONÁRIA DoDev      ///////
//////////////////////////////////////////////

//CRIANDO VARiÁVEIS
let modelos = []
let anos = []
let  valores = []
let contador = 0;
let continuar = true

alert('Bem-Vindo a Concessionária DoDev')

//CRIANDO LOOP
while(continuar){
    let modelo = prompt('Digite o modelo do carro')
    let ano = parseInt(prompt('Digite o ano do carro'))
    let valor = Number(prompt('Digite o valor'))

    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor

    console.log(`${modelo}, ${ano} Valor: ${valor}`);

    let desejaContinuar = prompt('Deseja inserir novos dados? \n[1] = Sim')
    if(desejaContinuar != '1'){
        continuar = false;
    }

    contador++
}

//EXIBINDO VALORES
console.log(`Modelos: ${modelos} \nAnos: ${anos} \nValores: ${valores}`);

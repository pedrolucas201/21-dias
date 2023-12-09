let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');
let temCarteira = prompt('Possui CNH?  (sim/não)');
let temCarro = prompt('Vocẽ possui um carro?  (sim/não)')

if(idade < 18 || temCarteira === 'não'){
    console.log(nome + ', você não pode dirigir!')
}else if(idade >= 18 && temCarteira === 'sim' && temCarro === 'não'){
    console.log(nome + ', você pode dirigir, mas não tem carro')
}else{
    console.log(nome + ", você será o motorista!!")
}
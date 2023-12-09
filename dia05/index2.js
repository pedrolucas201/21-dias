let opcao = parseInt(prompt('Olá, como posso ajudá-lo?  \n1 = Gasolina;  \n2 = Alcóol;  \n3 = Calibrar os pneus'))

switch(opcao){
    case 1:
        let gasolina = parseInt(prompt('Quantos R$ de gasolina deseja colocar? '))
        let litroGasolina = gasolina / 5;
        console.log('Foram adcionados no seu veículo, ' + litroGasolina + ' litros de gasolina.');
        break;
    case 2:
        let alcool = parseInt(prompt('Quantos R$ de alcóol deseja colocar? '))
        let litroAlcool = alcool / 3;
        console.log('Foram adcionados no seu veículo, ' + litroAlcool + ' litros de alcóol.');
        break;
    case 3:
        console.log('Pneus calibrados com sucesso!! Volte sempre :D')
        break;
    default:
        console.log('Opção não encontrada.')
        break;
}
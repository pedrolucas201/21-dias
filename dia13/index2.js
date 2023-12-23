class Carro{
    nome 
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.velocidadeMaxima/this.aceleracao)
        return resultado
    }
}

class Corrida{
    nome 
    tipo
    distancia
    participantes
    vencedor

    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.vencedor = ''
        this.participantes = []
    }
    
    verificarTempo(){
       let menorTempo = this.participantes[0].CalcularTempoMedio(this.distancia)
       let vencedor = this.participantes[0]

       for(let index = 0; index < this.participantes.length; index++){
        let tempo = this.participantes[index].CalcularTempoMedio(this.distancia)
        if(tempo < menorTempo){
            menorTempo = tempo
            vencedor = this.participantes[index]
        }
       }

       return this.vencedor = vencedor
    }

    exibirVencedor(){
        alert('O vencedor é: ' + this.vencedor.nome)
    }
}

let corrida = new Corrida('Monza', 'Fórmula 1', 60000)

corrida.participantes[0] = new Carro('Kicks', 120, 160, 5)
corrida.participantes[1] = new Carro('Marea', 310, 200, 9)
corrida.participantes[2] = new Carro('Pegout 206', 300, 220, 10)

corrida.verificarTempo()
corrida.exibirVencedor()
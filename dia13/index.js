class Computador{

    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd    
    }

    exibirConsole(){
        console.log('O tipo do seu Computador é: ' + this.tipo + ';\nO processador é um: ' + this.processador + ';\nA placa de vídeo é uma: ' + this.video + ';\nPossui ' + this.armazenamento + 'GB de armazenamento;\nPossui ' + this.memoriaRam + 'GB de Memória RAM;\nContém um SSD de ' + this.ssd + 'GB')
    }

}

let computador = new Computador("Notebook", "Ryzen 5", "RX 580", "500", "16", "240");
computador.exibirConsole()

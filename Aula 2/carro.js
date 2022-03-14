class Carro {
    marca = "Sem marca";
    modelo;

    setModelo(novoModelo){
        this.modelo = novoModelo;
    }
    showInfo(){
        console.log("Marca", this.marca);
        console.log("Modelo", this.modelo);
    }   
}

var carro = new Carro();
//var = Podem ser criadas e declaradas dentro do escopo da programação
//let = Podem ser atualizadas mas nao podem ser declaradas novamente
//const = Nao podem ser atualizadas e nem declaradas novamente 
carro.setModelo('Ka');
carro.showInfo();
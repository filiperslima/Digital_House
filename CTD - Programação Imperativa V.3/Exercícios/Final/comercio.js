let produtos = [
    {
        nome: "Carregador Celular Iphone 9",
        valor: 500,
        qualidade: 8,
        status: "Disponível"
    },
    {
        nome: "Iphone 9",
        valor: 750,
        qualidade: 10,
        status: "Disponível"
    },
    {
        nome: "Pano de ultra limpeza",
        valor: 800,
        qualidade: 10,
        status: "indisponível"
    },
    {
        nome: "Pano de ultra limpeza",
        valor: 800,
        qualidade: 10,
        status: "indisponível"
    } ,
    {
        nome: "Pano de ultra limpeza",
        valor: 800,
        qualidade: 1,
        status: "indisponível"
    } 
    
]

const carrinho = {
    produtos: produtos,
    valor : function(inicio, fim) {
        this.produtos = this.produtos.filter(function(item){
            return item.valor >= inicio && item.valor <= fim;
        });
    },
    qualidade: function(valor) {
        this.produtos = this.produtos.filter(function(item){ // ou this.produtos.filter(item => item.qualidade >= valor)
            return item.qualidade >= valor
        });
    },
    status : function(disponibilidade) {
        this.produtos = this.produtos.filter(function(item){
            return item.status == disponibilidade
        });
    }
}
carrinho.qualidade(6)
carrinho.valor(100, 900)
console.log(carrinho.produtos)

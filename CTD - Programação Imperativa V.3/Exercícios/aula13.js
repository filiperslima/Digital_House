let dados = [{
    nome: 'Rodrigo',
    idade: 38
},
{
    nome: "Rafael",
    idade: 27
},
{
    nome: "Maria",
    idade: 35
}
];

idades = [];

dados.forEach(function(item) {
    idades.push(item.idade);
});

idades2 = [];

for(i = 0; i < dados.length; i++) {
    idades2.push(dados[i].idade);
}

console.log(idades.sort());
console.log(idades2.sort());
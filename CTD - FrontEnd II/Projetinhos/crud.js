
// CRUD - Create, Read, Update e Delete

const tempClient = {
    nome: "Filipe",
    email: "frodrigues144@gmail.com",
    celular: "87999834369",
    cidade: "Belém de S. Francisco"
}

const createClient = (client) => {
    localStorage.setItem("testeBD", "Teste para CRUD") //O sett envia para o localStorage os dados (nome, valor).
}
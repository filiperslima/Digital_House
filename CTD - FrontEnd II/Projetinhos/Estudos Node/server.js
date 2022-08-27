const http = require('http');
http
    .createServer( (request, response) => {
        
        response.writeHead(200, {'Content-Type': 'application/json'})
        if (request.url === '/produto'){ 
        response.end(JSON.stringify({
            message: "Aba de produtos"
        }))}
        if (request.url === '/usuarios'){
        response.end(JSON.stringify({
            message: "Minha primeira aplicação"
        }))}
        request.url === '/teste'? response.end(JSON.stringify({
            message: "funcionou"
        })): response.end(JSON.stringify({
            message: "Deu erro"
        }))
       
    })
    .listen(4001, ()=> console.log("Servidor está rodando na porta 4001")) 


//req- requisição, res- resposta
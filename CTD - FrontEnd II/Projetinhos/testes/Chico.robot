*** Settings ***
Library    SeleniumLibrary
Resource    ./Chico.resource 


*** Test Case ***
Processo de compra da loja Chicorei
    Abrir o site da loja Chicorei
    # Clicar em "Concordar" no aviso sobre Cookies
    # Pesquisar por "Amarelo é desespero" e selecionar a primeira opção da lista de resultados
    # Validar o valor do produto 
    # Selecionar um tamanho, cor e clicar em comprar
    # Clicar em "Ver sacola"
    # Validar se a mensagem "Adquira o Chico Rei Prime para desfrutar de frete grátis por 1 ano em todos os pedidos, sem valor mínimo." está sendo exibida
    # Clicar em "Fechar pedido"

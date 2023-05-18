*** Settings ***
Library    SeleniumLibrary
*** Variables ***
${SITE}    https://chicorei.com/
${NAVEGADOR}    Edge
*** Keywords ***
Abrir o site da loja Chicorei
    Open Browser    ${SITE} ${NAVEGADOR}
    Maximize Browser Window

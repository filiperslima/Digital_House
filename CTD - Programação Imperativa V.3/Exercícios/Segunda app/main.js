const espectador =  require('./espectador');
const filme = require('./filme')
const espectadores = [];
espectadores.push(new espectador("Claudia",27,"BOM"))
espectadores.push(new espectador("Emanoel",19,"ÓTIMO"))
espectadores.push(new espectador("Emanoel",10,"ÓTIMO"))
espectadores.push(new espectador("Emanoel",10,"ÓTIMO"))
espectadores.push(new espectador("Emanoel",19,"ÓTIMO"))
espectadores.push(new espectador("José",21,"REGULAR"))
espectadores.push(new espectador("Maria",28,"BOM"))
espectadores.push(new espectador("João",29,"REGULAR"))
espectadores.push(new espectador("Maria",28,"BOM"))
espectadores.push(new espectador("João",29,"REGULAR"))
espectadores.push(new espectador("Emanoel",10,"ÓTIMO"))
espectadores.push(new espectador("Emanoel",19,"ÓTIMO"))
espectadores.push(new espectador("Claudia",27,"BOM"))
espectadores.push(new espectador("Claudia",27,"BOM"))
espectadores.push(new espectador("Claudia",27,"BOM"))

console.log(espectadores);
console.log(filme(espectadores))

let msg = "hello"
let nmbr = 3

console.log(msg, "para os", nmbr, "alunos da sala")
console.log(msg+" para os "+nmbr+" alunos da sala")
console.log(`${msg}  para os ${nmbr} alunos da sala`)
let msgFinal = msg.concat(' para os ', nmbr, ' alunos da sala')
console.log(msgFinal)
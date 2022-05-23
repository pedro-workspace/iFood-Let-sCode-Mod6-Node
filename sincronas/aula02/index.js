console.log('=== Prompt ===')

const readline = require('readline')

const prompt = (pergunta) => (variavel) => {
    const terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    terminal.question('Variável: ', (variavel) => {
        console.log(variavel)
        terminal.close()
        resolve(variavel)
    })
}

// terminal.question('Qual o seu nome? ', (name) => {
//     console.log('Olá, ', name)
//     terminal.question('E o seu sobrenome? ', (surname) => {
//         console.log('Então é ', `${name} ${surname}`)
//         terminal.question('Qual a sua idade atual? ', (age) => {
//             console.log('Entendo, ', age)
//             terminal.question('Onde mora? ', (adress) => {
//                 console.log('Morada: ', adress)
//                 const table = {
//                     nome: name,
//                     sobrenome: surname,
//                     idade: age,
//                     endereco: adress
//                 }
//                 console.table(table)
//                 terminal.close()
//             })
//         })
//     })
// })


//general prompt:


const nome = prompt('Qual o seu nome')
console.log(nome)
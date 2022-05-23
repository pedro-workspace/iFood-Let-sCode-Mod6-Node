const readline = require('readline')

const terminal = readline.createInterface(
    {
        input:process.stdin,
        output: process.stdout
    }
)

// terminal.question('Qual o seu nome? \n', nome => {
//     console.log('Hello, ', nome)
//     terminal.close
// })

//é preciso fazer uma pergunta de cada vez, assim, o código executará corretamente
//Exceto se fizermos os terminal.question() aninhado um dentro do outro:

terminal.question('qual o nome?\n ', nome => {
    console.log('Olá, ', nome)
    terminal.question('E o do seu irmão? \n ', nome_i => {
        console.log('Olá, ', nome_i)
        terminal.close
    })
})


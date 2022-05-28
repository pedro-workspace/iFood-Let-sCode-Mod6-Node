const express = require('express')
const fs = require('fs')
const app = express()


app.get('/', (req, res) => {
    res.send('The name is PAGE, HOME PAGE')
})

app.get('/POST', (req, res) => {
    res.send('POST page on site')
})

app.get('/POST/:content', (req, res) => {
    const conteudo = req.params.content
    console.log(conteudo)
    fs.writeFile('conteudo.txt', conteudo, (error) => {
        if (error) {
            return console.log(error + ', 404 not found')
        }
    })
    res.send('POST page on site, secret message: '+ ` ${conteudo}` + ' => NOT SECRET ANYMORE <= ')
})

app.get('/GET', (req, res) => {
    const data = fs.readFileSync('./conteudo.txt')
    res.send(`Time to read the file: \n\n ${data}`)
})

app.listen(8080, () => {
    console.log('Server on, http://localhost:8080')
})

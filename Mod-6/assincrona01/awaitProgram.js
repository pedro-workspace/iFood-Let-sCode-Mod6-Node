const createPrompt = readline => question => {

    return new Promise((resolve, reject) => {

        try {
            const terminal = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })

            terminal.question(question, result => {
                terminal.close()
                resolve(result)
            })
        }
        
        catch (err) { reject(err) }
    })
}

const prompt = createPrompt(require('require')) 
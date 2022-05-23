const readline = require('readline');

const prompt = (readline, question) => {

    return new Promise((resolve, reject) => {

        try {
            const terminal = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            terminal.question(question, result => {

                terminal.close();
                resolve(result);

            });
        }
        catch (err) { reject(err); }
    });

}

const program = async () => {

    const nota1 = await prompt(readline, 'Digite a nota 1: ');
    const peso1 = await prompt(readline, 'Digite o peso da nota 1: ');

    const nota2 = await prompt(readline, 'Digite a nota 2: ');
    const peso2 = await prompt(readline, 'Digite o peso da nota 2: ');

    const nota3 = await prompt(readline, 'Digite a nota 3: ');
    const peso3 = await prompt(readline, 'Digite o peso da nota 3: ');

    const media = (
        parseFloat(nota1) * parseFloat(peso1) +
        parseFloat(nota2) * parseFloat(peso2) +
        parseFloat(nota3) * parseFloat(peso3)
    );

    console.log("Média: " + media);

}

program();
import process from 'node:process';
import readLine from 'node:readline';
import chalk from 'chalk';

export const CLI = () => {
    console.clear();
    console.log(chalk.blue('=============================================================='));
    console.log(chalk.blue('         MD LINKS -VALIDA LOS LINKS DE TUS ARVHIVOS MD        '));
    console.log(chalk.blue('=============================================================='));

    const rl = readLine.createInterface(process.stdin, process.stdout);

    rl.question((chalk.blue('Enter a route  ')), (response) => {
        let route = response
        // agregar condicional para estructura de una ruta regex
        rl.setPrompt((chalk.blue('Select an option:  1. --validate true  2. ---validate false 3. --stats  4. --stats & --validate  0.exit ')))
        rl.prompt();
        rl.on('line', (input) => {
            if (input === '1') {
                // console.log(mdLinks( response ))
                console.log('Aca van la validacion completa (la que viene como true en el readme');
            }
            if (input === '2') {
                console.log('Aca van la validacion simple (la que viene coo false en el readme)');
            }
            if (input === '3') {
                console.log('estadisticas con cantidad de links y los que son unicos');
            }
            if (input === '4') {
                console.log('todos los anteriores');
            }
            if (input === '0') {
                process.exit();
            }
            console.log((chalk.redBright('ingresa una opción valida')));
            console.log(route);
        });
    });
};




//-------------------------stats--------------------------
    // total links  y Unique links
    // console.log('Name File:::::::', file);
    // const totalLinks = links.length
    // console.log('TOTAL:::::::', totalLinks)
    // const linksUniqueNumber = new Set(links).size;
    // console.log('Unique Links :::::::', linksUniqueNumber);
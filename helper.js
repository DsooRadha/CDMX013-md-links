import process from 'node:process';
import readLine from 'node:readline';
import chalk from 'chalk';
import { routeFiles } from './routes.js';
import { extractLinksAndText } from './lab.js';

export const CLI = () => {
    console.clear();
    console.log(chalk.blue('=============================================================='));
    console.log(chalk.blue('         MD LINKS -VALIDA LOS LINKS DE TUS ARVHIVOS MD        '));
    console.log(chalk.blue('=============================================================='));

    const rl = readLine.createInterface(process.stdin, process.stdout);
    const dataUser = {
        route: '',
        option: '',
    };
    rl.question((chalk.blue('Enter a route  ')), (response) => {
        dataUser.route = response

        rl.setPrompt((chalk.blue('Select an option:  1. --validate true  2. ---validate false 3. --stats  4. --stats & --validate  0.exit ')))
        rl.prompt();
        rl.on('line', (input) => {
            if (input === '1') {
               
                console.log('Aca van la validacion completa (true)');
            }
            if (input === '2') {
                const pasoUno = routeFiles(response);
                const pasoDos=extractLinksAndText(pasoUno);
                pasoDos.forEach(element=>{
                    console.log(element.href)
                })
                console.log('Aca van la validacion simple (false)');
            }
            if (input === '3') {
                console.log('estadisticas con cantidad de links y los que son unicos');
            }
            if (input === '4') {
                console.log('todos los anteriores');
            }
            if (input === '0') {
                0
                process.exit();
            } else {
                'ingresa una opción valida'
            }

            dataUser.option = input.trim()
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
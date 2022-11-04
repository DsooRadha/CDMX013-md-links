import process from 'node:process';
import readLine from 'node:readline';
import chalk from 'chalk';
import { mdLinks } from './mdLinks.js';

export const CLI = () => {
    console.clear();
    console.log(chalk.blue('=============================================================='));
    console.log(chalk.blue('             ------------ MD LINKS ---------              '));
    console.log(chalk.blue('=============================================================='));

    const rl = readLine.createInterface(process.stdin, process.stdout);
    const dataUser = {
        route: ''
    };
    rl.question((chalk.blue('Enter a route  ')), (response) => {
        dataUser.route = response

        rl.setPrompt((chalk.blue('Select an option:  1. --validate true  2. ---validate false 3. --stats  4. --stats & --validate  0.exit ')))
        rl.prompt();
        rl.on('line', (input) => {
            if (input === '1') {
                const options = {
                    validateTrue: true,
                    validateFalse: false,
                    stats: false,
                    statsAndValidate: false,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    });
            }
            if (input === '2') {
                const options = {
                    validateTrue: false,
                    validateFalse: true,
                    stats: false,
                    statsAndValidate: false,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    });
            }

            if (input === '3') {
                const options = {
                    validateTrue: false,
                    validateFalse: false,
                    stats: true,
                    statsAndValidate: false,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    });
            }
            if (input === '4') {
                const options = {
                    validateTrue: false,
                    validateFalse: false,
                    stats: false,
                    statsAndValidate: true,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    });
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

#!/usr/bin/env node
import process from 'node:process';
import readLine from 'node:readline';
import chalk from 'chalk';
import { mdLinks } from './mdLinks.js';

export const CLI = () => {
    console.clear();
    console.log(chalk.blue('=================================================================='));
    console.log(chalk.blue('   👾    👾    👾   ---------- MD LINKS --------  👾    👾    👾  '));
    console.log(chalk.blue('=================================================================='));

    const rl = readLine.createInterface(process.stdin, process.stdout);

    rl.question((chalk.yellow('Enter a route  ')), (response) => {
        let path = response;

        rl.setPrompt((chalk.cyan('Select an option:  1. --validate true  2. ---validate false 3. --stats  4. --stats & --validate  0.exit ')))
        rl.prompt();
        rl.on('line', (input) => {
            if (input === '1') {
                const options = {
                    validate: true,
                    stats: false,
                };

                mdLinks(path, options)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch(() => {
                        console.log('Enter a valid Path 👾 GAME OVER 👾');
                    })
            }
            else if (input === '2') {
                const options = {
                    validate: false,
                    stats: false,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch(() => {
                        console.log('Enter a valid Path 👾 GAME OVER 👾');
                    })
            }

            else if (input === '3') {
                const options = {
                    validate: false,
                    stats: true,
                };

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch(() => {
                        console.log('Enter a valid Path 👾 GAME OVER 👾');
                    })
            }
            else if (input === '4') {
                const options = {
                    validate: true,
                    stats: true,
                };
                

                mdLinks(response, options)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch(() => {
                        console.log('Enter a valid Path 👾 GAME OVER 👾');
                    })
            }
            else if (input === '0') {
                0
                process.exit();
            }
            else {
                console.log('👾   Enter a valid option  👾');
            }
        });
    });
};

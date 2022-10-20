import process from 'node:process';
import readLine from 'node:readline';
import util from 'util'
import chalk from 'chalk';

export const dataUser = {
    route: '',
    option: '',
};
export const CLI = () => {
    // const [ , , url]=process.argv
    // console.log(url)
    // export const route = process.argv[2]
    // console.log(route)
    console.clear();

    const rl = readLine.createInterface(process.stdin, process.stdout);

    rl.question((chalk.blue('Enter a route  ')), (response) => {
        dataUser.route = response

        rl.setPrompt((chalk.bgBlack('1. --validate  2. --stats  3. --stats--validate 0.exit ')))
        rl.prompt();
    });

    rl.on('line', (input) => {
        if (input.trim() === '0') {
            process.exit();
        }
        dataUser.option=input.trim()
    });

};

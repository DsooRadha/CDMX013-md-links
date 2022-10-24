import {
    convertingToAbsoluteRoutes, pathIsFile, isDirectory
} from './lab.js';
import fs from 'fs';
import pathLib from 'node:path';
// import pathLib from 'node:path';

export const routeFiles = (path) => {
    const absolutePath = convertingToAbsoluteRoutes(path);

    if (fs.existsSync(absolutePath) === false) {
        return 'GAME OVER'
    };

    if (pathIsFile(absolutePath) === false) {
        return filesInPathDirectory(absolutePath)
    };

    if (pathLib.extname(absolutePath) === '.md') {
        return absolutePath
    };

    return 'GAME OVER'
};

/**
 * This function get recursively  the files from a directory 
 * @param {string} route: the path of the directory to get the files
 * @return {array} an array with all the files in the directory
 */

const filesInPathDirectory = (route) => {

    let filesResult = [];

    if (pathIsFile(route) === true && pathLib.extname(route) === '.md') {
        filesResult.push(route)
    } else if (isDirectory(route) === true) {
        const filesDir = fs.readdirSync(route);
        filesDir.forEach((theFile) => {
            const newRoute = (route + '/' + theFile)
            // const newRoute = pathLib.join(route, theFile);
            filesResult = filesResult.concat(filesInPathDirectory(newRoute));
        });
    }

    return filesResult
};


// const mdLinks = (path, option) => new Promise((resolve, reject) => {
//     resolver();
//     reject();
// })

// mdLinks.then((response) => {
// }).catch(() => {
// });
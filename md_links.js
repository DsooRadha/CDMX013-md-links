import {
    convertingToAbsoluteRoutes, routeExist, pathIsFile, filesInDirectory, extFile, directoryPath
} from './methodsNode.js';
// import pathLib from 'node:path';

export const routeFiles = (path) => {
    const absolutePath = convertingToAbsoluteRoutes(path);

    if (routeExist(absolutePath) === false) {
        return 'GAME OVER'
    };

    if (pathIsFile(absolutePath) === false) {
        return filesInPathDirectory(absolutePath)
    };

    if (extFile(absolutePath) === '.md') {
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

    if (pathIsFile(route) === true && extFile(route) === '.md') {
        filesResult.push(route)
    } else if (directoryPath(route) === true) {
        const filesDir = filesInDirectory(route);
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
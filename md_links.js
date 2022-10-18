import fs from 'fs';
import {
    checkRoutes, convertingToAbsoluteRoutes, routeExist, pathIsFile, filesInDirectory, extFile, directoryPath
} from './methods.js';

export const mdLinks = (path) => {
    if (checkRoutes(path) === false) {
        // console.log('No soy absoluta')
        path = convertingToAbsoluteRoutes(path);
        // console.log('ya soy absoluta')
    }

    if (routeExist(path) === false) {
        return 'GAME OVER'
    };

    if (pathIsFile(path) === false) {
        if (directoryPath(path) === true) {
            console.log('es un directorio');
            filesInPathDirectory(path)
            return path
        }
    }
    (extFile(path) === '.md')
    return path
};


const filesInPathDirectory = (path) => {
    path = filesInDirectory(path)
    path.forEach(element => {
        if (extFile(element) === '.md') {
            let filesinPath = convertingToAbsoluteRoutes(element)
            console.log(filesinPath + ' ACA ESTOY')
            path = [filesinPath]
            return [filesinPath]
        }
    })
}
// console.log(filesInPathDirectory('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'))
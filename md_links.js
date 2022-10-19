import {
    checkRoutes, convertingToAbsoluteRoutes, routeExist, pathIsFile, filesInDirectory, extFile, directoryPath
} from './methods.js';

export const mdLinks = (path) => {
    const absolutePath = convertingToAbsoluteRoutes(path);

    if (routeExist(absolutePath) === false) {
        return 'GAME OVER'
    };

    if (pathIsFile(absolutePath) === false) {
        console.log('es un directorio');
        return filesInPathDirectory(absolutePath)
    }
    
    if (extFile(absolutePath) === '.md') {
        return absolutePath
    }

    return 'GAME OVER'
};

const filesInPathDirectory = (dirPath) => {
    const filesAndDirs = filesInDirectory(dirPath)
    return filesAndDirs.filter((element) => extFile(element) === '.md').map((element) => convertingToAbsoluteRoutes(element))
}
// console.log(filesInPathDirectory('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'))

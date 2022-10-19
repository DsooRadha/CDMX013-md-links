import {
     convertingToAbsoluteRoutes, routeExist, pathIsFile, filesInDirectory, extFile, directoryPath
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
    // filesAndDirs.forEach(element=>{
    //     if(extFile(element) === '.md'){
    //         const filesMD= filesAndDirs.map((element) => convertingToAbsoluteRoutes(element))
    //         return filesMD
    //     }
    //     if(directoryPath(element) === true){
    //          return filesInPathDirectory
    //      }
    // })
     return filesAndDirs.filter((element) => extFile(element) === '.md').map((element) => convertingToAbsoluteRoutes(element))
}


import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js';
import { validateLinks } from './http.js';
import { stastTrue } from "./stats.js";
import { statsBroken } from "./stastAndValidate.js"

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */

export const mdLinks = (path, { validateTrue, validateFalse, stats, statsAndValidate }) => {
    return new Promise((resolve, reject) => {

        if (validateTrue) {
            resolve(validateLinks(extractLinksAndText(routeFiles(path))));

        }
        else if (validateFalse) {
            resolve(extractLinksAndText(routeFiles(path)));
        }

        else if (stats) {
            resolve(stastTrue(path))
        }
        else if (statsAndValidate) {
            resolve(statsBroken(path))
        }
        // else{
        //     reject('Ha ocurrido un error'); 
        //  }       
    });
};

const options = {
    validateTrue: false,
    validateFalse: false,
    stats: false,
    statsAndValidate: false,
};

mdLinks('./README.md', options)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error, '👾 GAME OVER 👾')
    })

    // console.log(routeFiles('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md'));
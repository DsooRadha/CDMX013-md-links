import { routeFiles } from "./components/routes.js";
import { extractLinksAndText } from './components/lab.js';
import { validateLinks } from './components/http.js';
import { stastTrue } from "./components/stats.js";
import { statsBroken } from "./components/stastAndValidate.js"

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */

export const mdLinks = (path, { validate, stats }) => {
    return new Promise((resolve, reject) => {
        if (validate && stats) {
            resolve(statsBroken(path))
            return
        }      

        if (validate) {
            resolve(validateLinks(extractLinksAndText(routeFiles(path))));
            return
        } 

        if (stats) {
            resolve(stastTrue(path))
            return
        }

      resolve(extractLinksAndText(routeFiles(path)));
     

      reject('Enter path Valide')
    });
};

const options = {
    validate: false,
    stats: false,
};

mdLinks('./pruebasMD/pruebaSncilla/prueba.md', options)
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
      console.log( '👾 GAME OVER 👾')
    })

    // console.log(routeFiles('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md'));
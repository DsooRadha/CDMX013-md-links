import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js';
import { validateLinks } from './http.js';

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */
export const mdLinks = (path, { validate, stats }) => {
    return new Promise((resolve, reject) => {

        if (validate) {
            const arrayPromises = validateLinks(extractLinksAndText(routeFiles(path)));
            Promise.all(arrayPromises).then((res) => {
                resolve(res)
            })
            // resolve( Promise.all(arrayPromises));
        } else {
            resolve(extractLinksAndText(routeFiles(path)));
        };
    });
};

const options = {
    validate: true,
    stats: true
};

mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD', options)
    .then((result) => {
        console.log(result);
    });


//agregar casos con la opcion de stats y como stats interactua con validate
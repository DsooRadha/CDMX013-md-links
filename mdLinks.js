import { routeFiles } from "./components/routes.js";
import { extractLinksAndText } from './components/validateFalse.js';
import { validateLinks } from './components/http.js';
import { stastTrue } from "./components/stats.js";
import { statsBroken } from "./components/stastAndValidate.js"

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */

export const mdLinks = (path, { validate, stats }) => {
    return new Promise((resolve) => {
        if (validate && stats) {
            resolve(statsBroken(path))
        }      

        if (validate) {
            resolve(validateLinks(extractLinksAndText(routeFiles(path))));
        } 

        if (stats) {
            resolve(stastTrue(path))
        }

      resolve(extractLinksAndText(routeFiles(path)));
     
    });
};

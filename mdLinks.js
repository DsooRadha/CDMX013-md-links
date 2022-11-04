import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js';
import { validateLinks } from './http.js';
import { stastTrue } from "./stats.js";

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */
export const mdLinks = (path, { validateTrue, validateFalse, stats, statsAndValidate }) => {
    return new Promise((resolve, reject) => {

        if (validateTrue) {
            resolve( validateLinks(extractLinksAndText(routeFiles(path))));
            // Promise.all(arrayPromises).then((res) => {
            //     resolve(res)
            // })
            // resolve( Promise.all(arrayPromises));
        }
        if (validateFalse) {
            resolve(extractLinksAndText(routeFiles(path)));
        }

        if (stats) {
            resolve(stastTrue(path))
        }
        if (statsAndValidate) {
            
            const unique = []
            const stastCount = extractLinksAndText(routeFiles(path));
         
            stastCount.forEach(element => {
                if (!unique.includes(element.href)) {
                    unique.push(element.href);
                }
            })

            const arrayPromise = validateLinks(extractLinksAndText(routeFiles(path)));
            arrayPromise.then((result) => {

                const broken = []

                result.forEach(element => {

                    if (element.message == 'FAIL') {
                        broken.push(element)
                    }
                })
                resolve({ file: path, totalLinks: stastCount.length, uniqueLinks: unique.length, brokenLinks: broken.length })
            })

        }

        // reject('Ha ocurrido un error');        
    });
};

const options = {
    validateTrue:false,
    validateFalse: false,
    stats: false,
    statsAndValidate: true,
};

mdLinks('./pruebasMD', options)
    .then((result) => {
        // console.log(result);
    })
    .catch((error) =>{
        // console.log(error,'Error')
    })

    // console.log(routeFiles('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md'));
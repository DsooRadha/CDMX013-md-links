import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js';
import { validateLinks } from './http.js';


export const statsBroken = (path) => {
    const unique = []
    const broken = []
    const stastCount = extractLinksAndText(routeFiles(path));

    stastCount.forEach(element => {
        if (!unique.includes(element.href)) {
            unique.push(element.href);
        }
    })

    const arrayPromise = validateLinks(extractLinksAndText(routeFiles(path)));
    arrayPromise.then((result) => {

        result.forEach(element => {

            if (element.message == 'FAIL') {
                broken.push(element)
            }
        })
        
    })
    return ({ file: path, totalLinks: stastCount.length, uniqueLinks: unique.length, brokenLinks: broken.length })
}

// console.log(statsBroken('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));

const unique=(path)=>{
    const unique = []
    const stastCount = extractLinksAndText(routeFiles(path));

    stastCount.forEach(element => {
        if (!unique.includes(element.href)) {
            unique.push(element.href);
        };
    });
    return [unique.length,stastCount.length]
};
// console.log(unique('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));
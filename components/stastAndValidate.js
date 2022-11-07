import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js';
import { validateLinks } from './http.js';

const unique = (path) => {
    const unique = []
    const stastCount = extractLinksAndText(routeFiles(path));

    stastCount.forEach(element => {
        if (!unique.includes(element.href)) {
            unique.push(element.href);
        };
    });
    return { uniqueLinks: unique.length, totalLinks: stastCount.length }
};
//  console.log(unique('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));

export const statsBroken = (path) => {

    const totalAndUniqueLinks= unique(path);
    const broken = [];
    const arrayPromise = validateLinks(extractLinksAndText(routeFiles(path)));
    arrayPromise.then((result) => {

        result.forEach(element => {

            if (element.message == 'FAIL') {
                broken.push(element)
            };
        });
    });
    return ({ file: path, ...totalAndUniqueLinks, brokenLinks: broken.length });
};

//  console.log(statsBroken('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));


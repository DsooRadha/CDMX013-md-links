import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './validateFalse.js';
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

export const statsBroken = (path) => {

    const totalAndUniqueLinks = unique(path);
    const broken = [];
    const arrayPromise = validateLinks(extractLinksAndText(routeFiles(path)));
    let counter = 0;
    const objectBroken = arrayPromise.then((result) => {
        result.map(element => {

            if (element.message == 'FAIL') {
                counter ++;
            }
        });
        return ({ file: path, ...totalAndUniqueLinks, brokenLinks: counter })
    });
    return objectBroken
};

import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js'
import { validateLinks } from './http.js'

let option = true
export const mdLinks = (path) => {
    const arrayObjects = [];
    new Promise((resolve, reject) => {


        if (option) {
            arrayObjects.push(validateLinks(extractLinksAndText(routeFiles(path))));


        } else {

            const validateFalse = extractLinksAndText(routeFiles(path));
            validateFalse.forEach(element => {
                arrayObjects.push(element)
            })
        }

    });
    return arrayObjects
}

const arrayPromise = mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD')
const resultPromise = Promise.all(...arrayPromise)
resultPromise.then((result) => {
    // console.log(result);
})

import { routeFiles } from "./routes.js";
import { extractLinksAndText } from './lab.js'
import { validateLinks } from './http.js'

let option = true
// { option: true }

export const mdLinks = (path) => {
    const arrayObjects = [];
    new Promise((resolve, reject) => {
        // return new Promise((resolve, reject) => {
        if (option) {
            arrayObjects.push(validateLinks(extractLinksAndText(routeFiles(path))));

        } else {

            const validateFalse = extractLinksAndText(routeFiles(path));
            validateFalse.forEach(element => {
                arrayObjects.push(element)
            })
        }
    });
    //resolve()
    //  return Promise.all(... arrayObjects)
    return arrayObjects
    
}

const arrayPromise = mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD')
const resultPromise = Promise.all(...arrayPromise)
resultPromise.then((result) => {
      console.log(result);
})

//  console.log(mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));

//  mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD')
//  .then((result) => {
//     console.log(result);
// })
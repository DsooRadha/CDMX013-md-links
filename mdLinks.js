import { routeFiles } from "./routes.js";

let option = true
const mdLinks =
//  (path)=>{
    //   (path, (true, false)) => {
    new Promise((resolve, reject) => {
    
        if (option) {
           return resolve('Hola mundo');
        } else {
            return reject('Adios mundo');
        }
    });
// }


// console.log(mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'))

 mdLinks.then((response) => {
     console.log(response, 'Holo');
 }).catch((response) => {
     console.log(response, 'GAME OVER');
 });
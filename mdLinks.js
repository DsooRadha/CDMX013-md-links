import { routeFiles } from "./routes.js";

let option = true
const mdLinks = (path) => {
    new Promise((resolve, reject) => {

        if (option) {
            return resolve('Hola mundo');
        } else {
            const pasoUno = routeFiles(path);
            const pasoDos = extractLinksAndText(pasoUno);
            pasoDos.forEach(element => {
                console.log(element.href)
            })
            return reject('Adios mundo');
        }
    });
}


// console.log(mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'))

mdLinks.then((response) => {
    console.log(response, 'Alguno de los tipos de validacion fue exitoso');
}).catch((response) => {
    console.log(response, 'GAME OVER');
});
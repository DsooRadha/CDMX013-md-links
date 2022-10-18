import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';

const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
// const pathRelative = "./pruebasMD"
//-------------------tipo de ruta y pasarla absoluta----------
export const checkRoutes = (routes) => pathLib.isAbsolute(routes);
export const convertingToAbsoluteRoutes = (routes) => pathLib.resolve(routes);
export const routeExist = (routes) => fs.existsSync(routes);
export const pathIsFile = (routes) => fs.statSync(routes).isFile();
export const extFile = (routes) => pathLib.extname(routes);
export const directoryPath = (routes) => fs.lstatSync(routes, (true, false)).isDirectory();
export const filesInDirectory = (routes) => fs.readdirSync(routes);
export const readOnlyFile = (routes) => fs.readFileSync(routes, 'utf8');
export const filename = (routes) => pathLib.basename(routes)
//  export const stringFile = (routes) => routes.toString()

// //-------------------If si es MD leerlo ----------
//  const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const dataPath = [];

const readFile = fs.readFileSync(file, 'utf8')

// -------------------extraer Links ----------
const stringFile = readFile.toString()

console.log(filename(file))
const links = stringFile.match(/\(http.*?\)/g);
const totalLinks = links.length
dataPath.push(totalLinks)
console.log(totalLinks)
const text = stringFile.match(/\[.*?\]/g);
text.forEach(element => {
  const textClean = element.replace(/\[|\]/g, "")
  console.log(textClean)
  dataPath.push(textClean)
})
links.forEach(element => {
  const linksClean = element.replace(/\(|\)/g, "")
  console.log(linksClean)
  dataPath.push(linksClean)

  //comparar si los links son repetidos?
  //contabilizar los links
  //casos donde el corchete esta vacio
  //-------------------cortarlos en pedacitos y meterlas partes a un objeto [nombre del archivo con extension, [text] y http] ----------

})
console.log(dataPath)


fetch('http://www.liimni.net')
  .then(function (response) {
    console.log(response.status);
  }).then(() => {
    console.log("ok");
  }).catch((error) => {
    console.log('fail');
  });
// fetch('/api/wrong_endpoint')
//   .then(response => {
//     console.log(response) // full response body
//     console.log(response.status); // get only the response.status
//   })
// Petición HTTP
// fetch("'https://api.github.com/users/github")
// .then((response) => {
//   console.log(response.status); 
// });
    // .then(json => console.log(json));
//  fetch('https://ejemplo.com')
//  .then(response => console.log(response.status)) 
//     .catch(err => console.log(err))


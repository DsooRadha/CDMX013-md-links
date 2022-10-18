import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';

const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const pathRelative = "./pruebasMD"

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

//  const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const readFile = fs.readFileSync(file, 'utf8')

// -------------------extraer Links ----------
const stringFile = readFile.toString()
const textUniqueInFile = []
console.log(filename(file))
const links = stringFile.match(/\(http.*?\)/g);
const totalLinks = links.length
console.log(totalLinks)
const text = new Set(stringFile.match(/\[.*?\]/g));
text.forEach(element => {
  const textClean = element.replace(/\[|\]/g, "")
  textUniqueInFile.push(textClean)
  console.log(textClean)
})
const linksUniqueInFile = []
const uniqueLinks = new Set(links).size
links.forEach(element => {
  const linksClean = element.replace(/\(|\)/g, "")
  linksUniqueInFile.push(linksClean)
  //casos donde el corchete esta vacio

})

let message = ''
let statusHttp = ''
fetch('http://www.limni.net')
  .then((response) => {
    statusHttp = response.status
    console.log(statusHttp);

  }).then(() => {
    message = 'ok'
    console.log(message);
  }).catch((error, response) => {
    console.log(response.status)
    message = 'fail'
    console.log(error);
  });

const dataFileMD = {
  href: linksUniqueInFile,
  text: textUniqueInFile,
  fileNamePath: file,
  total: totalLinks,
  unique: uniqueLinks,
  status: statusHttp,
  messageLink: message,
}

console.log(dataFileMD)
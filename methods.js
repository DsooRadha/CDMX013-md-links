import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';

const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const pathRelative = "./pruebasMD"

export const checkRoutes = (routes) => pathLib.isAbsolute(routes);
export const convertingToAbsoluteRoutes = (route) => checkRoutes(route) === false ? pathLib.resolve(route) : route;
export const routeExist = (routes) => fs.existsSync(routes);
export const pathIsFile = (routes) => fs.statSync(routes).isFile();
export const extFile = (routes) => pathLib.extname(routes);
export const directoryPath = (routes) => fs.lstatSync(routes, (true, false)).isDirectory();
export const filesInDirectory = (routes) => fs.readdirSync(routes);
export const readOnlyFile = (routes) => fs.readFileSync(routes, 'utf8');
export const filename = (routes) => pathLib.basename(routes)
export const readFile = (routes) => fs.readFileSync(routes, 'utf8').toString()
console.log(readFile(file))
//  export const stringFile = (routes) => routes.toString()

// -------------------extraer Links ----------


const arrayLinks = ['https://github.com/DsooRadha/CDMX013-md-links/blob/main/pruebasMD/README.md',
  'https://github.com/users/DsooRadha/projects/2/views/1', 'http://www.liimni.net',]



const validateLinks = (arrayWithLinks) => {
  arrayWithLinks.forEach(link => {
    fetch(link)
      .then((response) => {
        statusHttp = response.status
        console.log(statusHttp);

      }).then(() => {
        if (statusHttp === 200) {
          console.log(statusHttp + ' ok')
        }
        console.log(statusHttp + ' fail');
      }).catch(() => {
      });
  })
}
console.log(validateLinks(arrayLinks))

const textUniqueInFile = [];
const linksUniqueInFile = [];
const allLinks = [];
const allLinksUnique = []
let message = []
let statusHttp = []

const extractLinksAndText = (routesAbsolute) => {
  const stringFile = readFile(routesAbsolute);
  const links = stringFile.match(/\(http.*?\)/g);
  allLinks.push(links.length);
  allLinksUnique.push(new Set(links).size);
  const linksClean = links.map((element) => element.replace(/\(|\)/g, ""))
  linksUniqueInFile.push(linksClean)

  const text = stringFile.match(/\[.*?\]/g);
  const textClean = text.map((element) => element.replace(/\[|\]/g, ""))
  textUniqueInFile.push(textClean)
}
extractLinksAndText(file)

const dataFileMD = {
  href: linksUniqueInFile,
  text: textUniqueInFile,
  fileNamePath: file,
  total: allLinks,
  unique: allLinksUnique,
  status: statusHttp,
  messageLink: message,
}

console.log(dataFileMD)
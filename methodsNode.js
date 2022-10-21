import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';

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

const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const pathRelative = "./pruebasMD"

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
// 2
//console.log(validateLinks(arrayLinks))


let message = []
let statusHttp = []

/**
 * 
 * @param {string[] | string} routesAbsolute 
 * @returns 
 */
const extractLinksAndText = (routesAbsolute) => {
  // Si es un string
  // Convertirlo a un string[]
  // Si no es un string no hacemos nada
  let routesAbsolutesArray = routesAbsolute
 
  if (typeof routesAbsolute === 'string') {
    routesAbsolutesArray = [routesAbsolute]
  }
  let totalLinks= 0
  let linkUniqueNumber= 0
  let linksUniqueString=[]
  /**
   * const result = {
   *    filePath: {
          totalLinks: number,
          linkUniqueNumber: number,
          linksUniqueString: string[],
          textUniqueInFile: string [],
        }
   * }
   * 
   */
    const result = {}
  routesAbsolutesArray.forEach(element => {
    const stringFile = readFile(element);
    const links = stringFile.match(/\(http.*?\)/g);

    totalLinks += links.length;
    linkUniqueNumber += new Set(links).size;
    linksUniqueString = links.map((element) => element.replace(/\(|\)/g, ""));

    const text = stringFile.match(/\[.*?\]/g);
    const textUniqueInFile = text.map((element) => element.replace(/\[|\]/g, ""))
  })
    // return {
    //   totalLinks,
    //   linkUniqueNumber,
    //   linksUniqueString,
    //   textUniqueInFile,
    // }

    return result
  
}
extractLinksAndText(file)

// const dataFileMD = {
//   href: linksUniqueString,
//   text: textUniqueInFile,
//   fileNamePath: file,
//   total: totalLinks,
//   unique: linkUniqueNumber,
//   status: statusHttp,
//   messageLink: message,
// }
//1
console.log(dataFileMD)

//const extractLinksAndText = (routesAbsolute) => {
  //   routesAbsolute.forEach(filePath => {
  //     const stringFile = readFile(filePath);
  //     console.log(stringFile)
  //     const links = stringFile.match(/\(http.*?\)/g);
  //     allLinks.push(links.length);
  //     allLinksUnique.push(new Set(links).size);
  //     const linksClean = links.map((element) => element.replace(/\(|\)/g, ""))
  //     linksUniqueInFile.push(linksClean)
  //     const text = stringFile.match(/\[.*?\]/g);
  //     const textClean = text.map((element) => element.replace(/\[|\]/g, ""))
  //     textUniqueInFile.push(textClean)
  //   })
  // }
  // extractLinksAndText(file)
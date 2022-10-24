import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';

export const convertingToAbsoluteRoutes = (route) => pathLib.isAbsolute(route) === false ? pathLib.resolve(route) : route;
export const pathIsFile = (routes) => fs.statSync(routes).isFile();
export const isDirectory = (routes) => fs.lstatSync(routes, (true, false)).isDirectory();
export const readOnlyFile = (routes) => fs.readFileSync(routes, 'utf8');
export const filename = (routes) => pathLib.basename(routes)
export const readFile = (routes) => fs.readFileSync(routes, 'utf8').toString()

const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
const pathRelative = "./pruebasMD"

const arrayLinks = ['https://github.com/DsooRadha/CDMX013-md-links/blob/main/pruebasMD/README.md',
  'https://github.com/users/DsooRadha/projects/2/views/1', 'http://www.liimni.net',]

let message = []
let statusHttp = []

const routesArray = [
  //  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/level2/level2.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/level2/level3/level3.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/nivel1.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md'
]

const extractLinksAndText = (routesAbsolute) => {

  let result = {
    //   resultRoute: {
    //     totalLinks: 0,
    //     linkUniqueNumber: 0,
    //     linksString: [],
    //     textUniqueInFile: [],
    //     nameFile:'',
    //   }
  }

  const routesAbsolutesArray = routesAbsolute
  // console.log('routes:::::::',routesAbsolutesArray);
  routesAbsolutesArray.forEach(file => {
    // console.log('FILE::::::::::::::', file);
    const stringFile = readFile(file)
    // console.log('aAQUI:::::::', stringFile);
    const links = stringFile.match(/\http.*?\)/g)
    console.log('::::::Que pasa acá:::::::::', links);
    // const links = stringFile.match(/\http.*?\.[a-zA-Z]+([\/])?(.*?)/g)
    // console.log('LINKS:::::::', links);

    if (links === null) {
      console.log('this file has no links:::::::', file);
    } else {

      console.log('Name File:::::::', file);
      const totalLinks = links.length
      console.log('TOTAL:::::::', totalLinks)
      const linksUniqueNumber = new Set(links).size;
      console.log('Unique Links :::::::', linksUniqueNumber);
      const linksString = links.map((element) => element.replace(/\)/g, ""));
      // console.log('MAP:::::::', linksString);
      const linksUnique = new Set(linksString)
      console.log('Unique Links text :::::::', linksUnique);
      // resultRoute['totalLinks'] =links;
      const text = stringFile.match(/\[.*?\(/g);
      const linksAndText = (/\[(.+)\]\((https?:\/\/.+)\)/gi)
      const textUniqueInFile = text.map((element) => element.replace(/\[|\]|\(/g, ""))
      console.log('textUnique:::::::::', textUniqueInFile);
      result[file] = {
        nameFile: file,
        totalLinks: links.length,

      }
      // result[file].resultRoute['nameFile'] =file
      // result.resultRoute['totalLinks']=links.length;
      // result.resultRoute['linkUniqueNumber']=new Set(links).size;
      // result.resultRoute[' linksString']=linksUnique

    }

    //-------------------------validate false-------------------
    //href = link text=[] file: name file.
    // console.log('Name File:::::::', file);
    //  const linksString = links.map((element) => element.replace(/\)/g, ""));
    // console.log('MAP:::::::', linksString);
    // const text = stringFile.match(/\[.*?\]/g);
    // const textUniqueInFile = text.map((element) => element.replace(/\[|\]/g, ""))
    // console.log('textUnique:::::::::', textUniqueInFile);
    //----------------------Validate True -------------------------
    //href = link text=[] file: name file. status= status HTTP message= ok or fail
    // console.log('Name File:::::::', file);
    //  const linksString = links.map((element) => element.replace(/\)/g, ""));
    // console.log('MAP:::::::', linksString);
    // const text = stringFile.match(/\[.*?\]/g);
    // const textUniqueInFile = text.map((element) => element.replace(/\[|\]/g, ""))
    // console.log('textUnique:::::::::', textUniqueInFile);
    // const validateLinks = (arrayWithLinks) => {
    //   arrayWithLinks.forEach(link => {
    //     fetch(link)
    //       .then((response) => {
    //         statusHttp = response.status
    //         console.log(statusHttp);

    //       }).then(() => {
    //         if (statusHttp === 200) {
    //           console.log(statusHttp + ' ok')
    //         }
    //         console.log(statusHttp + ' fail');
    //       }).catch(() => {
    //       });
    //   })
    // }
    // 2
    //console.log(validateLinks(arrayLinks))
  })
  console.log(result);
  return result
}
extractLinksAndText(routesArray)




//-------------------------stats--------------------------
    // total links  y Unique links
    // console.log('Name File:::::::', file);
    // const totalLinks = links.length
    // console.log('TOTAL:::::::', totalLinks)
    // const linksUniqueNumber = new Set(links).size;
    // console.log('Unique Links :::::::', linksUniqueNumber);
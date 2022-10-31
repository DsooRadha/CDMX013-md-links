import fs from 'fs';
import pathLib from 'node:path';

export const convertingToAbsoluteRoutes = (route) => pathLib.isAbsolute(route) === false ? pathLib.resolve(route) : route;
export const pathIsFile = (routes) => fs.statSync(routes).isFile();
export const isDirectory = (routes) => fs.lstatSync(routes, (true, false)).isDirectory();
export const readOnlyFile = (routes) => fs.readFileSync(routes, 'utf8');
export const readFile = (routes) => fs.readFileSync(routes, 'utf8').toString()

const routesArray = [
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/level2/level2.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/level2/level3/level3.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/nivel1.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
  '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md'
]

/** 
 * @param {array} fileMD
 * @return {array} an array object validate false
 */
export const extractLinksAndText = (routesAbsolute) => {

  let resultArray = []

  const routesAbsolutesArray = routesAbsolute
  routesAbsolutesArray.forEach(file => {
    const stringFile = readFile(file)
    const textAndLinksMD = stringFile.match(/\[(.+)\]\((https?:\/\/.+)\)/gi)

    if (textAndLinksMD !== null) {
      // console.log('Name File:::::::', file);
      textAndLinksMD.forEach(linkWithText => {
        // console.log(linkWithText);
        const link = linkWithText.match(/\http.*?\)/g)
        const linkClean = link.toString().replace(/\)/g, "");
        // console.log('LINK:::::::::::::', link)
        const arrayLinks = [linkClean]
        //  console.log('LINKsssssss:::::::::::::', arrayLinks)
        const text = linkWithText.match(/\[.*?\(/g);
        const textClean = text.toString().replace(/\[|\]|\(/g, "")
      
        // const arrayProm=arrayLinks.map(element=>{
        //   return validateLinks(element)
        // })
        // const prom=Promise.all(arrayProm);
        // prom.then((res)=>{

        // //  console.log(...res)
        // })

        resultArray.push({
          name: file,
          href: linkClean,
          text: textClean,
        })
      });

    } else {
      resultArray.push({
        name: file,
        href: null,
        text: null,
      })
    }

  })
  return resultArray
}
// console.log(extractLinksAndText(routesArray));

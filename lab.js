import fs from 'fs';
import pathLib from 'node:path';
import fetch from 'node-fetch';
import { validateLinks } from './http.js';

export const convertingToAbsoluteRoutes = (route) => pathLib.isAbsolute(route) === false ? pathLib.resolve(route) : route;
export const pathIsFile = (routes) => fs.statSync(routes).isFile();
export const isDirectory = (routes) => fs.lstatSync(routes, (true, false)).isDirectory();
export const readOnlyFile = (routes) => fs.readFileSync(routes, 'utf8');
export const readFile = (routes) => fs.readFileSync(routes, 'utf8').toString()

const routesArray = [
  // '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
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
const extractLinksAndText = (routesAbsolute) => {

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

        // arrayLinks.forEach(link => {
        //   validateLinks(link)
        //     .then((result) => {
        //      return {
        //         name: file,
        //         href: linkClean,
        //         text: textClean,
        //         status: result.status,
        //         message: result.statusText,
        //       }

        //     })


        //     .then((response) => {
        // result.push({
        //   name: file,
        //   href: linkClean,
        //   text: textClean,
        //   status: response.status
        //   message: response.statusText,
        // })
        //        
        // }).catch((error) => {

        //   result.push({
        //     name: file,
        //     href: linkClean,
        //     text: textClean,
        //     status: error.message,
        //     message: 'fail'
        //   })
        //});

        resultArray.push({
          name: file,
          href: linkClean,
          text: textClean,
        })
      });
      // })
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
console.log(extractLinksAndText(routesArray));

//-------------------------validate false-------------------
    //href = link text=[] file: name file
    //----------------------Validate True -------------------------
    //href = link text=[] file: name file. status= status HTTP message= ok or fail
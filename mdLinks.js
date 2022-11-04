import { routeFiles } from "./routes.js";
import { extractLinksAndText, readFile } from './lab.js';
import { validateLinks } from './http.js';

/** 
 * @param {path,{options}} 
 * @return {arrayPromiseobjects}  
 */
export const mdLinks = (path, { validateTrue, validateFalse, stats, statsAndValidate }) => {
    return new Promise((resolve, reject) => {

        if (validateTrue) {
            const arrayPromises = validateLinks(extractLinksAndText(routeFiles(path)));
            Promise.all(arrayPromises).then((res) => {
                resolve(res)
            })
            // resolve( Promise.all(arrayPromises));
        }
        if (validateFalse) {
            resolve(extractLinksAndText(routeFiles(path)));
        }

        if (stats) {
            const stats = [];
            const allObjectStats = []
            const filesMD = routeFiles(path)
            filesMD.forEach(file => {
                const stringFile = readFile(file)
                const textAndLinksMD = stringFile.match(/\[(.+)\]\((https?:\/\/.+)\)/gi)
                stats.push({
                    file, link: textAndLinksMD
                })
            });
            const objectStats = stats.map(element => {

                if (element.link !== null) {
                    const links = element.link
                    allObjectStats.push({ file: element.file, links: links.length, uniqueLinks: new Set(links).size });
                }
            })
            resolve(allObjectStats)
        
        }
        if (statsAndValidate) {
            const links = []
            const unique = []
            const stastCount = extractLinksAndText(routeFiles(path));
            links.push(stastCount.length);
            stastCount.forEach(element => {
                if (!unique.includes(element.href)) {
                    unique.push(element.href);
                }

                links.push(element.href)
            })

            const arrayPromises = validateLinks(extractLinksAndText(routeFiles(path)));
            const validation = Promise.all(arrayPromises)
            validation.then((result) => {

                const broken = []

                result.forEach(element => {

                    if (element.message == 'FAIL') {
                        broken.push(element)
                    }
                })
                resolve({ file: path, totalLinks: stastCount.length, uniqueLinks: unique.length, brokenLinks: broken.length })
            })

        }
    });
};

const options = {
    validateTrue:true,
    validateFalse: false,
    stats: false,
    statsAndValidate: true,
};

mdLinks('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md', options)
    .then((result) => {
        //  console.log(result);
    });

    // console.log(routeFiles('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md'));
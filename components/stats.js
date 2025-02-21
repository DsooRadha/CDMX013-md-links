import { readFile } from "./validateFalse.js";
import { routeFiles } from "./routes.js"

export const stastTrue = (path) => {
    const stats = [];
    const allObjectStats = []
    const filesMD = routeFiles(path)
    filesMD.forEach(file => {
        const allLinks = []
        const stringFile = readFile(file)
        const textAndLinksMD = stringFile.match(/\[(.+)\]\((https?:\/\/.+)\)/gi)
        if (textAndLinksMD !== null) {
        textAndLinksMD.forEach(element => {
          
                const link = element.match(/\http.*?\)/g);
                const linkClean = link.toString().replace(/\)/g, "");
                allLinks.push(linkClean);
            
        });
    
        stats.push({
            file, link: allLinks
        });
    }
    });
    stats.forEach(element => {

        if (element.link !== null) {
            const links = element.link
            allObjectStats.push({ file: element.file, links: links.length, uniqueLinks: new Set(links).size });
        }
    })
    return allObjectStats

}
console.log(stastTrue('/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'));
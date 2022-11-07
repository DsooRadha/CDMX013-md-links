import { readFile } from "./lab.js";
import { routeFiles } from "./routes.js"

export const stastTrue = (path) => {
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
    stats.forEach(element => {

        if (element.link !== null) {
            const links = element.link
            allObjectStats.push({ file: element.file, links: links.length, uniqueLinks: new Set(links).size });
        }
    })
    return allObjectStats

}

//  console.log(stastTrue('./pruebasMD'));
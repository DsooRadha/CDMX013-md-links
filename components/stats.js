import { readFile } from "./validateFalse.js";
import { routeFiles } from "./routes.js"

export const stastTrue = (path) => {
    const stats = [];
    const allObjectStats = []
    const filesMD = routeFiles(path)
    filesMD.forEach(file => {
        const stringFile = readFile(file)
        const textAndLinksMD = stringFile.match(/\[(.+)\]\((https?:\/\/.+)\)/gi)
        textAndLinksMD.forEach(linkWithText => {

            const link = linkWithText.match(/\http.*?\)/g);
            const linkClean = link.toString().replace(/\)/g, "");
            stats.push({
                file, link: linkClean
            });
        });
    });
    stats.forEach(element => {

        if (element.link !== null) {
            const links = element.link
            allObjectStats.push({ file: element.file, links: links.length, uniqueLinks: new Set(links).size });
        }
    })
    return allObjectStats

}

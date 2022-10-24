
import { CLI } from './helper.js'
import {routeFiles} from './md_links.js'
CLI();

const pathRelative = "./pruebasMD"
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
// const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasSencilla/prueba.md'
// const fileRelative = './pruebaSencilla/prueba.md'

console.log(routeFiles( pathRelative ))
// console.log(dataUser);

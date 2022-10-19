
import { CLI } from './helper.js'
import {mdLinks} from './md_links.js'

CLI();

const pathRelative = "./pruebasSencilla"
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasSencilla/prueba.md'
const fileRelative = './pruebaSencilla/prueba.md'

console.log(mdLinks(pathAbsolute))
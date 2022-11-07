import { mdLinks } from '../mdLinks.js'
import { validateAndStats, vFalse} from './mockData.js'

describe('mdLinks', () => {

    test('return object {file, uniqueLinks, totalLinks, brokenLinks}', () => {
       
        return mdLinks('./pruebasMD/prueba.md', { validate: true, stats: true }).then((results) => {
            expect(results).toEqual(validateAndStats)

        });
    });

    test('return an array of objects [{name, href, text}]', () => {
       
        return mdLinks('./pruebasMD/prueba.md', { validate: false, stats: true }).then((results) => {
            expect(results).toEqual(vFalse)

        });
    });
});
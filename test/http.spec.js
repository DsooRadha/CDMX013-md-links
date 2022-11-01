import { validateLinks } from './http.js'
import { arrayPromises,arrayObjects } from './mockData.js'
describe ('validateLinks',()=>{


test('should return an array of promises', () => {
    return (validateLinks(arrayObjects)).then((results) => {
        expect(results).toEqual(arrayPromises)
    })
});
});
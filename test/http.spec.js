import { validateLinks } from '../http.js'
import { arrayObjects, arrayResults } from './mockData.js'

jest.mock('node-fetch');

describe('validateLinks', () => {



    test('should return an array of promises', (done) => {
        console.log(validateLinks(arrayObjects));
        return Promise.all(validateLinks(arrayObjects)).then((results) => {
            expect(results).toEqual(arrayResults)
            done()
        })
    });
});


import { validateLinks } from '../http.js'
import { arrayObjects, arrayResults } from './mockData.js'
import {jest} from '@jest/globals'

// jest.mock('node-fetch');ç
global.fetch = jest.fn(() =>
{
    console.log('mifuncionfetcg');
   return Promise.resolve({ status: 200 })}
);

describe('validateLinks', () => {

    test('should return an array of promises', () => {
        console.log(validateLinks(arrayObjects));
        return Promise.all(validateLinks(arrayObjects)).then((results) => {
            expect(results).toEqual(arrayResults)
          
        })
    });
});


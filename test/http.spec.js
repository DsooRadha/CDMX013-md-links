import { validateLinks } from '../components/http.js'
import { arrayObjects, arrayResults, arrayResultsFail, arrayObjectsFail, arrayObjectsElse, arrayResultsElse } from './mockData.js'
import { jest } from '@jest/globals'

// jest.mock('node-fetch');
global.fetch = jest.fn(() => { Promise.resolve({ status: 200 }) });

describe('validateLinks', () => {

    test('should return an array of objects', () => {

        return validateLinks(arrayObjects).then((results) => {
            expect(results).toEqual(arrayResults)

        });
    });

    global.fetch = jest.fn(() => { Promise.resolve({ status: 'request to https://ejemplo.com/ failed, reason: unable to get local issuer certificate' }) });

    test('should return an array of object CATCH', () => {

        return validateLinks(arrayObjectsFail).catch((results) => {
            expect(results).toEqual(arrayResultsFail)

        });
    });

    global.fetch = jest.fn(() => { Promise.resolve({ status: 404 }) });

    test('should return an array of object ELSE', () => {
     
        return validateLinks(arrayObjectsElse).then((results) => {
            expect(results).toEqual(arrayResultsElse);
        });
    });


});
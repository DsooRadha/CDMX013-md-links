import { extractLinksAndText } from '../components/validateFalse.js'
import { arrayPathFiles, arrayObjectsValidateFalse } from './mockData.js'

describe('extracLinksAnText', () => {

    test('extracLinksAndText array  pathsfiles MD return object with Links, Text and File', () => {
        
       expect(extractLinksAndText(arrayPathFiles)).toEqual(arrayObjectsValidateFalse);

    })
})


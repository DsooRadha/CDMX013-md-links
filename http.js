import fetch from 'node-fetch';

const testObject = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/nivel1.md',
        href: null,
        text: null
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea'
    },
]

/** 
 * @param {arrayObjects} 
 * @return {arrayPromise}  validate true
 */

export const validateLinks = (arrayObjects) => {
   
   const  addStatusAndMessage=arrayObjects.map(element => {

        if (element.href !== null) {
                return fetch(element.href)
                    .then((response) => {
                        return { ...element, status: response.status, message: response.statusText }

                    }).catch((error) => {
                        return { ...element, status: error.message, message: 'FAIL' }
                    });
         };
    });
return addStatusAndMessage
};

const arrayPromises= validateLinks(testObject)
const endObject= Promise.all(arrayPromises)
endObject.then ((result)=>{
    // console.log(result);
})

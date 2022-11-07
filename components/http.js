import fetch from 'node-fetch';

const testObject = [

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
];

/** 
 * @param {arrayObjects} 
 * @return {arrayPromise}  validate true
 */

export const validateLinks = (arrayObjects) => {

    const addStatusAndMessage = arrayObjects.map(element => {

        return fetch(element.href)
            .then((response) => {
                if (response.status < 400) {
                    return { ...element, status: response.status, message: response.statusText }
                } else {
                    return { ...element, status: response.status, message: 'FAIL' }
                }
            }).catch((error) => {
                return { ...element, status: error.message, message: 'FAIL' }
            });
    });
    return Promise.all(addStatusAndMessage)
};

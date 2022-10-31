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
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://nodejs.org/',
        text: 'Node.js'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md',
        href: 'http://www.liimni.net',
        text: 'enlace roto'
    }
]
export const validateLinks = (arrayObjects) => {
   
   const  addStatusAndMessage=arrayObjects.map(element => {

        if (element.href !== null) {
                return fetch(element.href)
                    .then((response) => {
                        return { ...element, status: response.status, message: response.statusText }

                    }).catch((error) => {
                        return { ...element, status: error.message, message: 'fail' }
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

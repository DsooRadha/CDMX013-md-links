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
    arrayObjects.forEach(element => {
        if (element.href !== null) {
            let arrayLinks = [element.href]
            const arrayProm = arrayLinks.map(link => {
                return fetch(link)
                    .then((response) => {
                        return { status: response.status, message: response.statusText }

                    }).catch((error) => {
                        return { status: error.message, message: 'fail' }
                    });
            })
            const prom = Promise.all(arrayProm);
            prom.then((res) => {
                // console.log(res)
            });

            const total = Promise.all([prom, ...arrayObjects]);
            total.then((resTotal) => {
                console.log(...resTotal,'AcÁ::::::::::::::::::')
            });
        };
    });

};

//console.log(validateLinks(testObject))

// validateLinks('https://google.com')
//     .then((result) => {
//         console.log(result);
//     })



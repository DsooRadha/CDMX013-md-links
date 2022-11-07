export const arrayResults = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea',
        status: 200,
        message: 'OK'
    }
];
export const arrayObjects = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea'
    }
];

export const arrayObjectsFail = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example'
    }
];

export const arrayResultsFail = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example',
        status: 'request to https://ejemplo.com/ failed, reason: unable to get local issuer certificate',
        message: 'FAIL'
    },
];

export const arrayResultsElse = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
        href: 'https://es.wikipedia.org/wiki/Wikpedia:Portada',
        text: 'Link404',
        status: 404,
        message: 'FAIL'
    },
];

export const arrayObjectsElse = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
        href: 'https://es.wikipedia.org/wiki/Wikpedia:Portada',
        text: 'Link404'
    },
];

export const arrayPathFiles = [
    '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/level2/level3/level3.md',
    '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/nivel1.md',
    '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
    '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md'
];

export const arrayObjectsValidateFalse = [

    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example 1'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.liimni.net',
        text: 'enlace roto'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example 2'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example 3'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://nodejs.org/',
        text: 'Node.js'
    },
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example 7'
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
];

export const validateAndStats = {
    file: './pruebasMD/prueba.md',
    uniqueLinks: 4,
    totalLinks: 6,
    brokenLinks: 0
}

export const vFalse = [
    {
        file: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        links: 6,
        uniqueLinks: 6
    }
]
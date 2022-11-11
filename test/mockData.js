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
      text: 'image example'
    },
    {
      name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
      href: 'http://www.limni.net',
      text: 'enlace en línea'
    },
    {
      name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
      href: 'https://nodejs.org/',
      text: 'Node.js'
    },
    {
      name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md',
      href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
      text: 'Linea de comando CLI'
    }
  ]

export const validateAndStats = {
    file: './pruebasMD/prueba.md',
    uniqueLinks: 3,
    totalLinks: 3,
    brokenLinks: 1
}

export const statsTrue = 
    [
        {
            file: "/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md",
            links: 1,
            uniqueLinks: 1,
        },
      ]

export const vFalse =
[
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
      href: 'https://nodejs.org/',
      text: 'Node.js'
    }
  ]

  export const vTrue =
  [
    {
      name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/pruebaSencilla/prueba.md',
      href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
      text: 'Linea de comando CLI',
      status: 200,
      message: 'OK'
    }
  ]
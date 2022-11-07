export const arrayResults = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'http://www.limni.net',
        text: 'enlace en línea',
        status: 200,
        message: 'OK'
    }
]
export const arrayObjects =[
    {
            name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
            href: 'http://www.limni.net',
            text: 'enlace en línea'
    }
]

export const arrayObjectsFail =[
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example'
    }
]

export const arrayResultsFail=[
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md',
        href: 'https://ejemplo.com',
        text: 'image example',
        status: 'request to https://ejemplo.com/ failed, reason: unable to get local issuer certificate',
        message: 'FAIL'
      },
]

export const arrayResultsElse = [
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
        href: 'https://es.wikipedia.org/wiki/Wikpedia:Portada',
        text: 'Link404',
        status: 404,
        message: 'FAIL'
      },
]

export const arrayObjectsElse =[
    {
        name: '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md',
        href: 'https://es.wikipedia.org/wiki/Wikpedia:Portada',
        text: 'Link404'
      },
]
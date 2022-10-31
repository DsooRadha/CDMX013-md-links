
import fetch from 'node-fetch';

export const validateLinks = (link) => {
        return fetch(link)
        .then((response) => {
            return { status: response.status, message: response.statusText }

        }).catch((error) => {
            return { status: error.message, message: 'fail' }
        });
    }
    
// console.log(validateLinks('https://github.com/DsooRadha/CDMX013-md-links/blob/main/pruebasMD/README.md'))
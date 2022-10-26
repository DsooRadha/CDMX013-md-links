import fetch from 'node-fetch';

export const validateLinks = (link) => {
  
    return fetch(link)
        // .then((response) => {

        //     let status = response.status
        //     let message = response.statusText
        //     console.log(status, message);

        // }).catch((error) => {

        //     let status = error.message
        //     let message = 'fail'
        //     console.log(status, message);
        // });

}

// console.log(validateLinks('https://github.com/Dsooadha/CDMX013-md-links/blob/main/pruebasMD/README.md'))

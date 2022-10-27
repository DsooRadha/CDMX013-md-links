import fetch from 'node-fetch';

export const validateLinks = (link) => {

    return fetch(link)
        .then((response) => {

            let status = response.status
            let message = response.statusText
            return { status, message }

        }).catch((error) => {

            let status = error.message
            let message = 'fail'
            return { status, message }
        });
}



// validateLinks('https://google.com')
//     .then((result) => {
//         console.log(result);
//     })



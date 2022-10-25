import fetch from 'node-fetch';
let result = []
export const validateLinks = (link) => {
    return fetch(link).then((response) => {
        result = {
            status: response.status,
            message: 'ok'
        }

    }).catch((error) => {

        result = {
            status: response.status,
            message: 'fail'
        }
    });
    // .then((response) => {
    //     let statusHttp = response.status
    //     console.log(statusHttp);
    //     if (response.status === 200) {
    //         console.log('ok')
    //     } else {
    //         console.log('fail');
    //     }
    // }).catch((error) => {
    //     console.log(error.message)
    //     console.log('fail')
    // });
}

console.log(validateLinks('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'))


// export const validateLinks = (link) => {
//     return fetch(link)
//         .then((response) => {
//            return {
//             status: response.status,
//             message:'ok or fail'
//         }
//     })
//         .catch((error) => {
//             console.log('Erro al realizar la petición', error.code)
//         });
// }

// console.log(validateLinks('https://github.com/DsooRadha/CDMX013-md-links/blob/main/pruebasMD/README.md'))

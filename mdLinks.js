let option = true
const mdLinks =
    //   (path, (true, false)) => {

    new Promise((resolve, reject) => {
        option = false

        if (option) {
            resolve('Hola mundo');
        } else {
            reject('Adios mundo');
        }
    });

mdLinks.then((response) => {
    console.log(response, 'Holo');
}).catch((response) => {
    console.log(response, 'error GAME OVER');
});
// mdLinks.then((response) => {
// }).catch(() => {
// });
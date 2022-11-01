
const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('paso 2');
        }, 2000);
    })
}

//console.log(myFunction()); //
console.log('paso 1');
myFunction()
    .then((result) => {
        console.log(result);
        return `${result} y luego paso 4`;
    })
    .then((resultTwo) => {
        console.log('linea 18', resultTwo);
    })
    .catch((error) => {

    });

console.log('paso 3');

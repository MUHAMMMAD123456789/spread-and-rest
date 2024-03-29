

// function fibonaci(num) {
//     const result = [0, 1];

//     return result[num];
// }


// console.log(fibonaci(7));







// const n = parseInt(prompt('Введите номер числа Фибоначчи: '));

// let fib = [0, 1];


// while (fib.length <= n) {

//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
// }

// console.log(`Число Фибоначчи под номером ${n}: ${fib[n]}`);









// function create(stop){

//     let fib = [0,1];

//     for(i = 0; i < stop; i++){
//         let result = fib.at(-2) + fib.at(-1)
//        fib.push(result)


//     }

//     console.log(fib);
// }

// create(+prompt('Num'))










// let array = [1,2,3,4,5,6]

// console.log(
//     ...array,
// );

// console.log(
//     Math.max(...array)
// );







// function getLongest(...arr){

//     let ln = ''
    
//     for(let name of arr){
//         if(name.length > ln.length) {
//             ln = name  
//         }
//     }

//     return ln

// }

// console.log(
//     getLongest('Alex' , 'Adam' , 'Jaxongir')
//     );







// let arr = [
//     [1,2,3,4], 
//     [1,2,3,4],
//     [1,2,3,4]
// ]


// function flatten(arr) {
//     let fill = []

//     for(let item of arr){
//         if(Array.isArray(item)){
//             fill.push(...item)
//         } else {
//             fill.push(...item)
//         }
//     }


//     console.log(fill);
// }

// flatten(arr)









function letEmail(name , surname) {
    let email = name + '.' + surname + '@gmail.com'
    
    return email
  
}

console.log(

    letEmail(prompt('Name'),prompt('Surname'))

    );






function generateRandomId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


let id = generateRandomId(10);
console.log(id); 










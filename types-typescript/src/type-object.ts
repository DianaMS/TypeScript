// Type: object
let user: object;
user = {}; //Object
user = [];
// user = 2; //error
user = {
    id: 1,
    username: 'Diana',
    isPRO: true
};

console.log('user', user);
// console.log('username', user.username) //El tipo object(minuscula) no se puede acceder a las propiedades del objeto

// Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'Diana',
    isPRO: true
};

const isInstance = myObj instanceof Object; //clase Object JavaScript
console.log('isInstance', isInstance)
console.log('user.username', myObj.username)
export {} //para no tener problemas con variables con mismo nombre creados en otros archivos por ejemlo con user
//Corchetes []

//Tipo explícito
let users: string[];
users = ['uno', 'dos', 'tres'];
// users = [1, true, 'cinco']; //Error, solo puede contener cadenas

//Tipos inferidos
let otherUsers = ['uno', 'dos', 'tres'];
// users = [1, true, 'cinco']; // Error

// Array<tipo>
let pictureTitles: Array<string>;
pictureTitles = ['one', 'two', 'three'];

// Accediendo a los valores en un array
console.log('first user', users[0]);
console.log('first title', pictureTitles[2]);

// Propiedades en Array
console.log('tamaño de users', users.length)

//Uso de funciones de arreglos
users.push('cuatro');
users.sort();
console.log('users', users)
users.reverse();
console.log('users reverse', users);

//TUPLE
//[1, 'nameUser']
let user: [number, string];
user = [1, 'Diana'];
console.log('user', user)
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

//Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'camarografo', true];
console.log('userInfo', userInfo);

//Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'jardinero']); //0
array.push([2, 'cocinero']); //1
array.push([3, 'chofer']); //2
console.log('array', array);

//Uso de funciones Array
//lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001');
console.log('array', array);

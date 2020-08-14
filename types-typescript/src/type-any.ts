//Tipo explicito 
let idUser: any; // admite cualquier tipo de dato
idUser = 1; //number
idUser = '1' // string
console.log('idUser', idUser);
console.log(typeof idUser)

//Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
 
let surprise: any = 'hello typescript';
//
const res = surprise.substring(6);
console.log('res', res)

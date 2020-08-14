export {}
//10, '10'
// let idUser: number | string; //permite soportar un valor numerico y en texto
// idUser = 10;
// idUser = '10';

// //Buscar username dado un id
// function getUserNamebyId( id: number | string) {
//     //Loigica de negocio
//     return 'un nombre de usuario'
// }

// getUserNamebyId(20);
// getUserNamebyId('20'); //Acepta argumentos number | string


//Alias de tipos en ts, para evitar redundancia
type IdUser = number | string;
type Username = string;
let idUser: IdUser; 
idUser = 10;
idUser = '10';

//Buscar username dado un id
function getUserNamebyId(id: IdUser): Username {
    //Loigica de negocio
    return 'un nombre de usuario'
}

getUserNamebyId(20);
getUserNamebyId('20');

// Tipos Literales (como texto)
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPictura: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';

console.log(largePicture)
console.log(mediumPictura)
console.log(smallPicture)

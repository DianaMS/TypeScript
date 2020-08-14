//Crear una Fotografia 

type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usamos TS, definimos tipos para parametros
function createPicture(title: string, date: string, size: SquareSize) {
    //Se crea nuestro objeto fotografia
    console.log('createPicture using', title, date, size)
}

createPicture('My Party', '2020', '500x500');
createPicture('Rupac', 'Vacaciones', '1000x1000');

// Parametros opcionales en funciones
//? éste simbolo le dice a ts que quizá no llegue ese valor
function student(name?:string, edad?:number, codigo?:number){
    console.log('Estudiante: ', name, edad, codigo)
}

student('Karla', 25, 2014034);
student('Karla', 2014034);
student('Karla', 25);
student();

//ES6 Flat Array Function
type peopleSize = '20' | '50' | '100';
let mainEvent = (name: string, date: string, people: peopleSize): object => {
    return {
        name,
        date,
        people,
    };
}

const saveEvent = mainEvent('Trecking Lomas', 'octubre', '20');
console.log('mainEvent object', saveEvent);

//Como usar Tipo de retorno con TypeScript

function handleError(code:number, message: string): never | string {
    // procesamiento del codigo
    if(message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'Se ha producido un error'
    }
}



try {
    let result = handleError(200, 'OK'); // retorna un string
    console.log('result', result);
    result = handleError(404, 'error'); // retorna un tipo never
    console.log('result', result)
} catch (error) {

}
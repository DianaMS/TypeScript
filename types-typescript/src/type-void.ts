export {}
//Void
//Tipo explícito

function showInfo(user: any) : any {
    console.log('UserInfo', user.id, user.username, user.firstName);

}
showInfo({id:1, username:'diana', firstName:'DIANA'});

// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id:1, username:'diana', firstName:'DIANA'});

// Tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

// Tipo never
function handleError(code: number, message: string): never{
    //Procesamiento de codigo
    //Generamos un mensaje
    throw new Error(`${message}. Code: ${code}`);
}

try{
    handleError(404, 'Not Found');
}catch (error) {
}

//Funcion que retorna un bucle infinito
function sumNumbers(limit: number): never {
    let sum=0;
    while(true){
        sum++
    }
    // return sum; //nunca retornamos la suma
}
sumNumbers(10); //ciclo infinito, programa nunca termina
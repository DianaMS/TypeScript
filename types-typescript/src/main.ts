// NUMBER
// Explicito

let phone: number;
phone = 1;
phone = 5210644;
// phone = 'hola' // error

// Inferido
let phoneNumber = 5210644;
phoneNumber = 12;
// phoneNumber = true; //error

let hex: number = 0xf00d; // representa valores hexadecimales
let binary: number = 0b1010; // representa valores binarios
let octal: number = 0o744; // representa valores octales

// Tipo Bolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
isPro = false;
// isPro = 123; // error

// Tipado Inferido
let isUserPro = true;
isUserPro = false;
// isUserPro = 'hola' // error

// Tipo String
// Tipado Explicito
let username: string = 'luixaviles';
username= "hola"
// username=2; // error

// Template String
// Uso de back-tick ``
let userInfo: string;
userInfo = `
    username: ${username}
    firstName: ${username + 'Aviles'}
    phone: ${phone}
    isPro: ${isPro}     
`;
console.log('userInfo', userInfo);
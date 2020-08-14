//Null explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; //error

let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

//Undefined explicita
let undefinedVarible: undefined = undefined;
// undefinedVarible= 'test'; //Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVarible);
console.log('otherUndefined', otherUndefined);


// Uso de null y undefined como subtipos
// --strictNullChecks
// Compilar en la terminal tsc --watch src/type-null-undefined.ts --stricNullChecks
// O de manera global, activar --stricNullChecks : true en tsconfig.json
let albumName: string;
// albumName = null;
// albumName = undefined;
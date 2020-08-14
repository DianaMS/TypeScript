export {}
// <> // Angle Bracket syntax
let username: any;
username = 'juanita';

//asumimos que tenemos una cadena y lepediremos a ts que confie en nosotros
let message: string = (<string>username).length > 5 ? 
                      `Welcome ${username}` :
                      'Username is too short';
console.log('message', message)

let usernameWithId: any = 'luis 1';
// como obtener el username?
username = (<string>usernameWithId).substring(0,4);
console.log('solo username', username)

// Syntaxis "as"
message= (username as string).length > 5 ? 
                      `Welcome ${username}` :
                      'Username is too short';
console.log('message with as', message);

let helloUser: any;
helloUser= 'hello camarografo';
username = (helloUser as string).substring(6);
console.log('username', username);



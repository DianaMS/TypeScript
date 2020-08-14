export {}
// Funcion para mostrar una Fotografía

enum PictureOrientation1 {
    Portrait,//posicion0
    Square , //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} 

//creando nuestra interface(palabra reservada)
interface Picture {
    title: string;
    date: string;
    orientation: PictureOrientation1;    
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title},
                 date: ${picture.date},
                 orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PictureOrientation1.Portrait
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-04',
    orientation: PictureOrientation1.Panorama,
    // extra: 'valor de prueba' //error
});

// opcionales con ?

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'default',
        date:'2020'}

    if(config.title) {
        pic.title = config.title
    }
    if(config.date) {
        pic.date = config.date
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture({title: 'Huancayo'});
console.log('picture', picture);

// Intefaz: Usuario, readonly(atributo solo lectura)
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {
    id: 10,
    username: 'Diana',
    isPro: true
};
console.log('user', user)
user.username = 'Hercilia'
// user.id = 20; //Solo lectura, ya no se puede modificar
console.log('user', user)
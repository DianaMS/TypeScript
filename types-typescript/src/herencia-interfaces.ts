export {}

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

// ambas interface comparten atributos que son comunes pej. id y title
// usamos herencia con las interfaces

// interface Album {
//     id: number;
//     title: string;
// }

// interface Picture {
//     id: number;
//     title: string;
//     orientation: PhotoOrientation:
// }

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity{
    //copia de atributos de Entity
    //se puede agregar atributos, estos nuevos atributos no se heredan
    description: string;
}

interface Picture extends Entity{
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'foto1',
    description: 'alta resolución',
}

const picture: Picture = {
    id: 9,
    title: 'Vacaciones de Verano',
    orientation: PhotoOrientation.Landscape,
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon'

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
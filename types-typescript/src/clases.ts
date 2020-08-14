export {}

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

class Picture {
    //Definimos propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    constructor(idParameter: number, titleParameter: string, orientationParameter: PhotoOrientation) {
        this.id = idParameter;
        this.title = titleParameter;
        this.orientation = orientationParameter
    }

    //Comportamiento de nuestra clase
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Diana sesion', PhotoOrientation.Panorama);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos de nuestras clases(public por defecto)
// nada nos impide cambiar nuestros estados
// podemos usar la palabra reservada public
picture.id = 100; //public
picture.title = 'Otro tiluto'; //public
album.title = 'Persona paranormal';
console.log('album', album);
console.log('picture', picture);
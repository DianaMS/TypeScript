export {}

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

class Picture {
    //Definimos propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

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
    private id: number;
    private title: string;
    private pictures: Picture[];

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


// picture.id = 100; //error, ahora es privado
// picture.title = 'Otro tiluto'; // error, ahora es privado
// album.title = 'Persona paranormal'; // error, ahora es privado
console.log('album', album);
console.log('picture', picture);
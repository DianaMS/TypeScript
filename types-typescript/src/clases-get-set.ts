export {}

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

// get y set

class Picture {
    //Definimos propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    constructor(idParameter: number, titleParameter: string, orientationParameter: PhotoOrientation) {
        this._id = idParameter;
        this._title = titleParameter;
        this._orientation = orientationParameter
    }

    get id() {
        return this._id;
    }

    set id(idParameter: number) {
        this._id = idParameter;
    }

    get title() {
        return this._title;
    }

    set title(titleParameter: string) {
        this._title = titleParameter;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientationParameter: PhotoOrientation) {
        this._orientation = orientationParameter;
    }

    //Comportamiento de nuestra clase
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private _pictures: Picture[];

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    get id() {
        return this._id;
    }

    set id(idParameter: number) {
        this._id = idParameter;
    }

    get title() {
        return this._title;
    }

    set title(titleParameter: string) {
        this._title = titleParameter;
    }

    addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Diana sesion', PhotoOrientation.Panorama);
album.addPicture(picture);

console.log('album', album);

console.log('picture.id', picture.id) // invocando al metodo get id()

picture.id = 100; // private, ts invoca metodo set id(100)
picture.title = 'Otro tiluto';
album.title = 'Persona paranormal';
console.log('album', album);
console.log('picture', picture);



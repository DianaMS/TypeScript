export {}

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

// crear SUPERclase
class Item {
    protected _id: number;
    protected _title:string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
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
}
// get y set

class Picture extends Item{
    public static photoOrientation = PhotoOrientation;

    //Definimos propiedades
    private _orientation: PhotoOrientation;

    constructor(idParameter: number, titleParameter: string, orientationParameter: PhotoOrientation) {
        
        super(idParameter, titleParameter);
        this._orientation = orientationParameter
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

class Album extends Item{
    private _pictures: Picture[];

    constructor(id: number, title: string) {
        super(id, title) //constructor de superclase
        this._pictures = [];
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


//creacion de un objeto a partir de la superclase
//con esto no podemos crear un objeto para una clase abstracta
// const item = new Item(1, 'titulo');
// console.log('item', item);

//Probando el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Panorama)
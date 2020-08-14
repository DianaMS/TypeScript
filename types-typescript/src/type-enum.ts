// Orientación para Fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Portrait, //posicion0
    Square, //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} //esto es nuestro enumerado

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
const portrait: PhotoOrientation = PhotoOrientation.Portrait;
console.log('portrait', portrait);
console.log('landscape', PhotoOrientation[landscape]);

// tambien asi funciona

enum PhotoOrientation1 {
    Portrait = 0, //posicion0
    Square = 1, //posicion1
    Panorama = 2, //posicion2
    Landscape = 3 //posicion3
} 

enum PictureOrientation1 {
    Portrait = 10, //posicion0
    Square , //posicion1
    Panorama, //posicion2
    Landscape //posicion3
} 
console.log('portrait', PictureOrientation1.Portrait);
console.log('landscape', PictureOrientation1.Landscape);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp'
}

const colombia: Country = Country.Colombia;
console.log('colombia', colombia)
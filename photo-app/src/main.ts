import { Album } from './album';
import { PhotoOrientation } from './photo-orientation';
import { Picture } from './picture';
import { User } from './user';

const user = new User(1, 'Diana', 'Hercilia', true);
const album = new Album(10, 'Diana Pictures');
const picture = new Picture(1, 'TypeScript', '2020', PhotoOrientation.Landscape);

//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user)
user.removeAlbum(album);
console.log('user', user)
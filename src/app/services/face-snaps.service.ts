import {Injectable} from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 54,
      location: 'Paris',
    },
    {
      id:2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2800px-Three_Roxk_mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 3,
      location: 'La montagne',
    },
    {
      id:3,
      title: 'Un bon repas',
      description: "Mmmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 160,
    }
  ];

  getAllFaceSnaps():FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(id:number):FaceSnap{
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === id
    );
    if(faceSnap){
      return faceSnap;;
    }
    else{
      throw new Error('FaceSnap not found!');
    }
  }
  snapFaceSnapById(id:number, snapType:'snap' | 'unsnap'): void{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(faceSnap){
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
    else{
      throw new Error('FaceSnap not found!');
    }
  }
}

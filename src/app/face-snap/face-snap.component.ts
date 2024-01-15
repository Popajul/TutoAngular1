import { Component, OnInit,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService,private router:Router) {}
  snapped!: boolean;
  snapButtonText!: string;
  ngOnInit() {
    this.snapped = false;
    this.snapButtonText = this.snapped ? 'Oops un snap' : 'Oh Snap!';
  }
  onSnap() {
    if (this.snapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = 'Oh Snap!';
      this.snapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = 'Oops un Snap!';
      this.snapped = true;
    }
  }
  onImgClick(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

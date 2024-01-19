import { Component, OnInit, Input } from "@angular/core";
import { FaceSnap } from "../../core/models/face-snap-model";
import { FaceSnapsService } from "../../core/services/face-snaps.service";
import { Router } from "@angular/router";
import { Observable, of, tap } from "rxjs";

@Component({
    selector: "app-face-snap",
    templateUrl: "./face-snap.component.html",
    styleUrls: ["./face-snap.component.scss"],
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
    faceSnap$!: Observable<FaceSnap>;

    constructor(
        private faceSnapsService: FaceSnapsService,
        private router: Router
    ) {}
    snapped!: boolean;
    snapButtonText!: string;
    ngOnInit() {
        this.snapped = false;
        this.snapButtonText = this.snapped ? "Oops un snap" : "Oh Snap!";
        this.faceSnap$ = of(this.faceSnap);
    }
    onSnap(faceSnapId: number) {
        if (this.snapped) {
            this.faceSnap$ = this.faceSnapsService
                .snapFaceSnapById(faceSnapId, "unsnap")
                .pipe(
                    tap(() => {
                        this.snapButtonText = "Oh Snap!";
                        this.snapped = false;
                    })
                );
        } else {
            this.faceSnap$ = this.faceSnapsService
                .snapFaceSnapById(faceSnapId, "snap")
                .pipe(
                    tap(() => {
                        this.snapButtonText = "Oops un Snap!";
                        this.snapped = true;
                    })
                );
        }
    }
    onImgClick(id: number) {
        this.router.navigateByUrl(`facesnaps/${id}`);
    }
}

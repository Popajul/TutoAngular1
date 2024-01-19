import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapsRountingModule } from "./face-snaps-routing.module";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

@NgModule({
    declarations: [
        FaceSnapComponent,
        SingleFaceSnapComponent,
        FaceSnapListComponent,
        NewFaceSnapComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, FaceSnapsRountingModule],
    exports: [
        FaceSnapComponent,
        SingleFaceSnapComponent,
        FaceSnapListComponent,
        NewFaceSnapComponent,
    ],
})
export class FaceSnapsModule {}

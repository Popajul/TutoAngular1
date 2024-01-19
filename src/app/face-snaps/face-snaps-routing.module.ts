import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/gards/auth-gard";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [
    {
        path: "create",
        component: NewFaceSnapComponent,
        canActivate: [AuthGuard],
    },
    {
        path: ":id",
        component: SingleFaceSnapComponent,
        canActivate: [AuthGuard],
    },
    { path: "", component: FaceSnapListComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FaceSnapsRountingModule {}

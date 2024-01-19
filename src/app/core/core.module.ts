import { CommonModule, registerLocaleData } from "@angular/common";
import * as fr from "@angular/common/locales/fr";
import { LOCALE_ID, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { httpInterceptorProviders } from "./interceptors";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, HttpClientModule],
    exports: [HeaderComponent],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "fr-FR",
        },
        httpInterceptorProviders,
    ],
})
export class CoreModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}

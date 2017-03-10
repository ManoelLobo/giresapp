import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from './../pages/home/home';
import { NotificationPage } from './../pages/notification/notification';
import { CreditsPage } from './../pages/credits/credits';

import { ModalSepararPage } from './../pages/modal-separar/modal-separar';
import { ModalReciclaveisPage } from './../pages/modal-reciclaveis/modal-reciclaveis';
import { ModalOrganicosPage } from './../pages/modal-organicos/modal-organicos';
import { ModalRejeitosPage } from './../pages/modal-rejeitos/modal-rejeitos';
import { ModalOutrosPage } from './../pages/modal-outros/modal-outros';
import { ModalSobreGGEAPage } from './../pages/modal-sobre-ggea/modal-sobre-ggea'

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NotificationPage,
        CreditsPage,
        ModalSepararPage,
        ModalReciclaveisPage,
        ModalOrganicosPage,
        ModalRejeitosPage,
        ModalOutrosPage,
        ModalSobreGGEAPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NotificationPage,
        CreditsPage,
        ModalSepararPage,
        ModalReciclaveisPage,
        ModalOrganicosPage,
        ModalRejeitosPage,
        ModalOutrosPage,
        ModalSobreGGEAPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

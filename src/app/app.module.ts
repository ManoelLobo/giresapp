import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { CreditsPage } from './../pages/credits/credits';

import { ModalSepararPage } from './../pages/modal-separar/modal-separar';
import { ModalReciclaveisPage } from './../pages/modal-reciclaveis/modal-reciclaveis';
import { ModalOrganicosPage } from './../pages/modal-organicos/modal-organicos';
import { ModalRejeitosPage } from './../pages/modal-rejeitos/modal-rejeitos';
import { ModalOutrosPage } from './../pages/modal-outros/modal-outros';

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
    ModalOutrosPage
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
    ModalOutrosPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

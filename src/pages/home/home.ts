import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ModalSepararPage } from '../modal-separar/modal-separar';
import { ModalReciclaveisPage } from '../modal-reciclaveis/modal-reciclaveis';
import { ModalOrganicosPage } from '../modal-organicos/modal-organicos';
import { ModalRejeitosPage } from './../modal-rejeitos/modal-rejeitos';
import { ModalOutrosPage } from './../modal-outros/modal-outros';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    modals: Array<{title: string, component: any}>;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
        this.modals = [
            {title: "separar", component: ModalSepararPage},
            {title: "reciclaveis", component: ModalReciclaveisPage },
            {title: "organicos", component: ModalOrganicosPage },
            {title: "rejeitos", component: ModalRejeitosPage },
            {title: "outros", component: ModalOutrosPage }
        ];
    }

    showModal(nModal: number) {
        let modal = this.modalCtrl.create(this.modals[nModal].component);
        modal.present();
    }

}

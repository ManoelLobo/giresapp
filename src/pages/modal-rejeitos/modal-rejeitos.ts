import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modal-rejeitos',
    templateUrl: 'modal-rejeitos.html'
})
export class ModalRejeitosPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalRejeitosPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

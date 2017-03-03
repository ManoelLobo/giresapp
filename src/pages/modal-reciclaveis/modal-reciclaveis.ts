import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modal-reciclaveis',
    templateUrl: 'modal-reciclaveis.html'
})
export class ModalReciclaveisPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalReciclaveisPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modal-organicos',
    templateUrl: 'modal-organicos.html'
})
export class ModalOrganicosPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalOrganicosPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

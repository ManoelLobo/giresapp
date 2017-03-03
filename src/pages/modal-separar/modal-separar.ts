import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modal-separar',
    templateUrl: 'modal-separar.html'
})
export class ModalSepararPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalSepararPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

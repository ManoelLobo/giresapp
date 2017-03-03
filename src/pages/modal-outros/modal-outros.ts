import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modal-outros',
    templateUrl: 'modal-outros.html'
})
export class ModalOutrosPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalOutrosPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

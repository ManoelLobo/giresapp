import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalSobreGGEA page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-modal-sobre-ggea',
    templateUrl: 'modal-sobre-ggea.html'
})
export class ModalSobreGGEAPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalSobreGGEAPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

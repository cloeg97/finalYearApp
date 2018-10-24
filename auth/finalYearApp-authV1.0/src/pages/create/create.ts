import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
	@ViewChild('amount') amount;
	@ViewChild('currency') currency;
	@ViewChild('receiver') receiver;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  sendMoney() {
  	console.log('This user would send money with these parameters ', this.amount.value, this.currency.value, this.receiver.value);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfirmRequestPage } from '../../pages/confirm-request/confirm-request';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 
import { transaction } from '../../models/transaction/transaction.interface';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  


  transactionRef$: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private database: AngularFireDatabase) {
    this.transactionRef$ = this.database.list('transaction').valueChanges();;
  }

  confirmTransaction(transaction: transaction) {
    this.navCtrl.push(ConfirmRequestPage, {transactionID: transaction.$key});
  	/*If userType = shop
		  this.presentConfirm();
	  Else 
	  	this.presentPrompt();
	*/
  }

  presentConfirm() { //If User is shop owner
  	let alert = this.alertCtrl.create({
  		title: 'Confirm Transaction',
  		message: 'Are you sure you want to confirm this transaction?',
  		buttons: [
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				handler: () => {
  					console.log('Shop clicked cancel');
  				}
  			},
  			{
  				text: 'Confirm',
  				handler: () => {
  					console.log('Shop clicked confirm');
  				}
  			}
  		]
  	});
  	alert.present();
  }

  presentPrompt() { //If user is customer
  	let alert = this.alertCtrl.create({
  		title: 'Confirm Transaction',
  		message: 'Where do you want to collect your payment?',
  		inputs: [
  			{
  				name: 'shopName',
  				placeholder: 'Shop Name'
  			},
  			{
  				name: 'address',
  				placeholder: 'Address'
  			}
  		],
  		buttons: [
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				handler: data => {
  					console.log('Customer clicked cancel');
  				}
  			},
  			{
  				text: 'Confirm',
  				handler: data => {
  					console.log('Customer clicked confirm');
  				}
  			}
  		]
  	});
  	alert.present();
  }


}

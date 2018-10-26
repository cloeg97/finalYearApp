import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  confirm() {
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

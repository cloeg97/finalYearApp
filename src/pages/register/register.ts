import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('username') user;
	@ViewChild('password') password;
  @ViewChild('firstname') first;
  @ViewChild('lastname') last;
  @ViewChild('email') email;
  @ViewChild('companyname') company;
  @ViewChild('address') address;
  @ViewChild('bankdetails') bank;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
  	console.log('Would register user with ', this.user.value, this.password.value, this.first.value, this.last.value, this.email.value);
    console.log('If this user is a shop owner, they would register with ', this.company.value, this.address.value, this.bank.value);
  }
}

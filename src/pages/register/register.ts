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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
  	console.log('Would register user with ', this.user.value, this.password.value, this.first.value, this.last.value, this.email.value);
  }
}

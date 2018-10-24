import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../models/user.interface';

import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]

})
export class LoginPage {
	
	@ViewChild('email') email;
	@ViewChild('password') password;

  user = {} as User; 

  constructor(private AFauth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
  try {
   const result =  this.AFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
  	//console.log('Would sign in with ', this.user.email, this.password.value);
    this.navCtrl.push(WelcomePage);
    }
    catch(e){
      console.log(e);
    }
  }

}

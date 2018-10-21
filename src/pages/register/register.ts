import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]

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

  hideMe: boolean;

  constructor(  private AFauth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams, 
  ) {
      //
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //var that = this;


  hide(){
    this.hideMe = false;
  }

  show() {
    this.hideMe = true;
  }

  checkUserType(userType) {
    if(userType == "shop") {
      this.show(); //show 
    }
    else {
      this.hide(); //hide
    }
  }
  

  registerUser(){
  try{
   const result = this.AFauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
   console.log(result);
  }
  catch(e){
    console.error(e);
    }
  }
 // doSignup(){
//
  //  var   account = {
    //  first_name: this.first_name,
      //last_name: this.last_name || '',
      //email: this.email,
      //user: this.user, 
      //password: this.password,
//
   // };



 // registerUser() {
 //	console.log('Would register user with ', this.user.value, this.password.value, this.first.value, this.last.value, this.email.value);
  //  this.navCtrl.push(WelcomePage);
    //console.log('If this user is a shop owner, they would register with ', //this.company.value, this.address.value, this.bank.value);
  //}
//}
}


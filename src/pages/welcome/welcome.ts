import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';
import { ViewPage } from '../view/view';
import { RequestPage } from '../request/request';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  showCreate() {
  	this.navCtrl.push(CreatePage);
  }

  showView() {
  	this.navCtrl.push(ViewPage);
  }

  showRequest() {
  	this.navCtrl.push(RequestPage);
  }

}


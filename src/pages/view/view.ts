import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 
import { transaction } from '../../models/transaction/transaction.interface';


import { Observable } from 'rxjs/Observable';


// npm i rxjs@6 rxjs-compat@6 promise-polyfill --save
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
	transactionRef$: Observable<any[]>;
  constructor(public navCtrl: NavController,public navParams: NavParams, private database: AngularFireDatabase) {
    this.transactionRef$ = this.database.list('transaction').valueChanges();;
  }

  //transactionRef$: AngularFireList<transaction[]>

  //constructor(public navCtrl: NavController,public navParams: NavParams, private database: AngularFireDatabase) {

  //	this.transactionRef$ = this.database.list('transaction');

  //}

}

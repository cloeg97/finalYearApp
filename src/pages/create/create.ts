import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { transaction } from '../../models/transaction/transaction.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



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

  transaction = {} as transaction
  

  transactionRef$: AngularFireList<transaction>


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.transactionRef$ = this.database.list('transaction');
  }

  sendMoney(transaction: transaction) {
  	//console.log('This user would send money with these parameters ', this.amount.value, this.currency.value, this.receiver.value);
    this.transactionRef$.push({
      transactionAmount: Number(this.transaction.transactionAmount),
      transactionCurrency: this.transaction.transactionCurrency,
      transactionReceiver: this.transaction.transactionReceiver,
      transactionConfirmationFlag: false
    });
    //Reset Create Transaction
    this.transaction = {} as transaction;
    //Navigate User Back to welcome page
    this.navCtrl.pop();
  }
}

/*service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}*/

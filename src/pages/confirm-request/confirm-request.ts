import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database'; 
import { transaction } from '../../models/transaction/transaction.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-confirm-request',
  templateUrl: 'confirm-request.html',
})
export class ConfirmRequestPage {
	transactionRef$: Observable<transaction>;
	

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
  	const transactionID = this.navParams.get('transactionID');
  	this.transactionRef$ = this.db.object(`transaction/${transactionID}`);
  	
  	const itemsRef = this.db.object(`transaction/${transactionID}`);
  	itemsRef.update({ transactionConfirmationFlag: 'true' });
  	//itemsRef.update(`${transactionID}`, { transactionConfirmationFlag: 'true' });
 	// this.transactionRef$ = this.database.object('transaction/' + `${transactionID}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmRequestPage');
  }

}

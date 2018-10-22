import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2';
 
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

	items;
	dataToAdd;
  constructor(public navCtrl: NavController,public afd: AngularFireDatabase, public navParams: NavParams) {
  	this.getDataFromFireBase();
  }

  	getDataFromFireBase(){
  		this.afd.list('Test/').valueChanges().subscribe(
  			data => {
  				console.log(data)
  				this.items = data
  			});
  	}

  	addData(){
  		this.afd.list('/Test').push(this.dataToAdd);
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}

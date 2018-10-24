import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreatePage } from '../pages/create/create';
import { ViewPage } from '../pages/view/view';
import { RequestPage } from '../pages/request/request';
import { WelcomePage } from '../pages/welcome/welcome';
//added imports 19/10/18
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { AngularFireModule } from 'angularfire2';
import {FIREBASE_CONGFIG} from "./app.firebase.config"
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// Initialize Firebase
export const config = {
    apiKey: "AIzaSyDpLFX2ybiGPWLgLZiR9RTW8gH3BHFRNCo",
    authDomain: "ionic-test-cc733.firebaseapp.com",
    databaseURL: "https://ionic-test-cc733.firebaseio.com",
    projectId: "ionic-test-cc733",
    storageBucket: "ionic-test-cc733.appspot.com",
    messagingSenderId: "709127477872"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CreatePage,
    ViewPage,
    RequestPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONGFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    CreatePage,
    ViewPage,
    RequestPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider
  ]
})
export class AppModule {}

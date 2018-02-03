import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShareItPage } from '../pages/share-it/share-it';
import { UpgradePage } from '../pages/upgrade/upgrade';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AdvertiseWithUsPage } from '../pages/advertise-with-us/advertise-with-us';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShareItPage,
    UpgradePage,
    ContactUsPage,
    AdvertiseWithUsPage,
    TermsAndConditionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShareItPage,
    UpgradePage,
    ContactUsPage,
    AdvertiseWithUsPage,
    TermsAndConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

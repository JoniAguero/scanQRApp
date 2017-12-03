import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage, HomePage, GuardadosPage, MapaPage } from '../pages/index.pages';

//PLUGINS
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from '@agm/core';

//SERVICIOS
import {HistorialserviceProvider} from "../providers/historialservice/historialservice";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GuardadosPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSbUDI9chixNm9fuxRYSIARxuNNCkAg84'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    GuardadosPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    HistorialserviceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

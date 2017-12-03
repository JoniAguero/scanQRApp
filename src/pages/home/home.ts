import { Component } from '@angular/core';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Componentes
import { Platform } from "ionic-angular";

//Servicios
import {HistorialserviceProvider} from "../../providers/historialservice/historialservice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private platform: Platform,
              private _historialserviceProvider:HistorialserviceProvider) {

  }

  scan(){

    if(!this.platform.is('cordova')){
      this._historialserviceProvider.agregar_historial('geo:-31.455737,-64.157905')
      return;
    }

    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Result: " +barcodeData.text);
      console.log("Format: " +barcodeData.format);
      console.log("Cancelled: " +barcodeData.cancelled);

      if(barcodeData.cancelled == false && barcodeData.text != null){
        this._historialserviceProvider.agregar_historial( barcodeData.text );
      }

    }, (err) => {
      console.log("Error: " + err);
    });
  }

}

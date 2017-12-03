import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {ModalController} from "ionic-angular";
import {MapaPage} from "../../pages/mapa/mapa";

@Injectable()
export class HistorialserviceProvider {

  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser,
              private _modalController:ModalController) {

  }

  agregar_historial(texto:string){

    let data = new ScanData( texto );
    this._historial.unshift(data);

    console.log(this._historial);
    this.abrirScan(0);

  }

  abrirScan(index:number = 0){
    let scanData = this._historial[index];

    switch (scanData.tipo){

      case "http":
        this.iab.create(scanData.tipo, "_system");
      break;

      case "mapa":
        this._modalController.create(MapaPage, {coords: scanData.info}).present();
      break;

      default:
        console.error("Tipo no soportado");
    }
  }

  cargar_historial(){
    return this._historial;
  }

}

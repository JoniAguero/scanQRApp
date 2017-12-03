import { Component } from '@angular/core';

import {HistorialserviceProvider} from "../../providers/historialservice/historialservice";
import {ScanData} from "../../models/scan-data.model";

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor(private _historialserviceProvider:HistorialserviceProvider) {
  }

  ionViewDidLoad() {
    this.historial = this._historialserviceProvider.cargar_historial();
  }

  abrir_scan(index:number){
    this._historialserviceProvider.abrirScan(index);
  }

}

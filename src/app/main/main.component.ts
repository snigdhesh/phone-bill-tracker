import { Component,SimpleChanges } from '@angular/core';
import { IDevice } from '../models/IDevice';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  totalDataCharges: number = 0;
  totalNumberOfDevices: IDevice[] = [
    { deviceName: "Neha Prasad", dataCharge: 0},
    { deviceName: "Naga", dataCharge: 0},
    { deviceName: "Nirman", dataCharge: 0}
  ];

  dataChargePerDevice: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['totalDataCharges'].currentValue);
  }

  calculateCharges(totalDataCharges: any){
    console.log(totalDataCharges)
    this.dataChargePerDevice=totalDataCharges/this.totalNumberOfDevices.length;
    this.dataChargePerDevice=Number(this.dataChargePerDevice.toFixed(2));

    this.totalNumberOfDevices.forEach(device=>{
        device.dataCharge=this.dataChargePerDevice;
    })    
  }


}

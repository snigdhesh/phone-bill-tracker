import { Component,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CalculatorService } from '../services/CalculatorService';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [CalculatorService]
})
export class DeviceComponent {
  @Input() deviceName: string="";
  @Input() dataCharge: number=0;
  @Input() planBill: number=0;
  totalBill: number=0;
  finalBill: number =0;
  bills: number[]=[];

  formData: any={};

  calculateCharges(planBill: any){
    this.totalBill=this.dataCharge + Number(planBill);
  }

  constructor(private calculatorService: CalculatorService){  }

  onSubmit(form: NgForm){
    
  }
}

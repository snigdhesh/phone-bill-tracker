import { Component,Input,Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../services/CalculatorService';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [CalculatorService]
})
export class DeviceComponent {

  @Input() numberOfDevices: number=0;
  @Input() totalDataCharges: number=0;
  @Input() deviceName: string="";
  @Input() dataCharge: number=0;
  @Input() planBill: number=0;

  totalBill: number=0;
  finalBill: number =0;
  bills: number[]=[];

  @Output() totalBillEvent = new EventEmitter<number>();

  formData: any={};

  deviceForm=new FormGroup({
    deviceName: new FormControl(''),
    dataCharge: new FormControl(),
    planBill: new FormControl(''),
    totalBill: new FormControl()
  })

  calculateCharges(e: any){
    this.totalBill=this.dataCharge + Number(e.target.value);
    this.totalBill=Number(this.totalBill.toFixed(2));
    this.deviceForm.controls['totalBill'].setValue(this.totalBill);
    
  }

  constructor(private calculatorService: CalculatorService){  }

  ngOnInit(){
    this.deviceForm=new FormGroup({
      deviceName: new FormControl(this.deviceName),
      dataCharge: new FormControl(this.dataCharge),
      planBill: new FormControl('',[Validators.required]),
      totalBill: new FormControl('')
    })
  }

  buttonDisplay: boolean=true;

  onSubmit(){
    this.totalBillEvent.emit(this.totalBill);
    this.buttonDisplay=false;
  }
}

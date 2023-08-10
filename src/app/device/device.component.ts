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
  @Input() additionalCharges: number=0;

  totalBill: number=0;
  finalBill: number =0;
  bills: number[]=[];

  @Output() totalBillEvent = new EventEmitter<number>();
  @Output() formDataEvent = new EventEmitter<any>();

  formData: any={};

  deviceForm=new FormGroup({
    deviceName: new FormControl(''),
    dataCharge: new FormControl(0),
    planBill: new FormControl(0),
    additionalCharges: new FormControl(0),
    totalBill: new FormControl(0)
  })

  calculatePlanBillCharges(e: any){
    this.planBill=Number(e.target.value);
    this.calculateFinalBill(this.dataCharge,this.additionalCharges,this.planBill);  
  }

  calculateAdditionalCharges(e: any){
    this.additionalCharges=Number(e.target.value);
    this.calculateFinalBill(this.dataCharge,this.additionalCharges,this.planBill);
  }

  calculateFinalBill(dataCharge: number, additionalCharges:number, planBill: number){
    this.totalBill=0;
    this.totalBill=dataCharge + additionalCharges + planBill;
    this.totalBill=Number(this.totalBill.toFixed(2));
    this.deviceForm.controls['totalBill'].setValue(this.totalBill);   
  }

  constructor(private calculatorService: CalculatorService){  }

  ngOnInit(){
    this.deviceForm=new FormGroup({
      deviceName: new FormControl(this.deviceName),
      dataCharge: new FormControl(this.dataCharge),
      planBill: new FormControl(0,[Validators.required]),
      additionalCharges: new FormControl(0),
      totalBill: new FormControl(0)
    })
  }

  buttonDisplay: boolean=true;

  onSubmit(){
    this.totalBillEvent.emit(this.totalBill);
    this.formDataEvent.emit(this.deviceForm);
    this.buttonDisplay=false;
  }
}

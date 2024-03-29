import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IDevice } from '../models/IDevice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ISummary } from '../models/ISummary';
import { Router } from '@angular/router';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router: Router, private summaryService: SummaryService) {}

  devices: IDevice[] = environment.devices;
  summary: ISummary[] = [];

  finalBill: number = 0;
  totalMobileDataCharges: number = 0;
  showDevices: boolean = false;
  displaySaveButton: boolean = true;
  displayResetButton: boolean = false;
  totalDataCharge: number = 0;
  lateFee: number =0;

  basicInfoForm = new FormGroup({
    totalDataCharges: new FormControl('', [Validators.required]),
    lateFee: new FormControl(''),
    totalNumberOfDevices: new FormControl(this.devices.length),
    dataChargePerDevice: new FormControl(0),
  });

  dataChargePerDevice: number = 0;

  onBasicFormSubmit() {
    this.displaySaveButton = false;
    this.displayResetButton = true;
    this.showDevices = true;
    this.finalBill = 0;
  }

  setTotalDataCharge(e: any) {
    this.totalDataCharge = e.target.value;
    this.calculateSharedBill(this.totalDataCharge);
  }

  setLateFee(e: any) {
    this.lateFee = e.target.value;
    this.calculateSharedBill(Number(this.totalDataCharge) + Number(this.lateFee));
  }

  calculateSharedBill(totalDataCharges: number) {
    this.dataChargePerDevice = totalDataCharges / this.devices.length;
    this.dataChargePerDevice = Number(this.dataChargePerDevice.toFixed(2));
    this.basicInfoForm.controls['dataChargePerDevice'].setValue(
      this.dataChargePerDevice
    );
    this.devices.forEach((device) => {
      device.dataCharge = this.dataChargePerDevice;
    });
    this.totalMobileDataCharges = totalDataCharges;
  }

  calculateFinalBill(e: any) {
    this.finalBill = this.finalBill + e;
    this.finalBill = Number(this.finalBill.toFixed(2));
  }

  displayFormData(form: any) {
    this.summary.push(form.value);
  }

  checkSummary() {
    this.summaryService.setSummary(this.summary);
    this.router.navigate(['/summary']);
  }

  onResetForm() {
    this.basicInfoForm.reset();
    this.showDevices = this.displayResetButton = false;
    this.displaySaveButton = true;
    this.finalBill = 0;
    this.basicInfoForm.controls['totalNumberOfDevices'].setValue(
      this.devices.length
    );
  }
}

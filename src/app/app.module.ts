import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './services/CalculatorService';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

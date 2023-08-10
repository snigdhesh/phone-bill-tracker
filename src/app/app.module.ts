import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './services/CalculatorService';
import { SummaryComponent } from './summary/summary.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { HeaderComponent } from './header/header.component';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeviceComponent,
    SummaryComponent,
    CurrencyPipe,
    HeaderComponent,
    SummaryPipe
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

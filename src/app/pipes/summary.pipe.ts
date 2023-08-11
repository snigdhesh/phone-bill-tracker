import { Pipe, PipeTransform } from '@angular/core';
import { ISummary } from '../models/ISummary';
import { CurrencyPipe } from './currency.pipe';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  summary: ISummary[]=[];
  transform(summary: ISummary[], ...args: unknown[]): ISummary[] {
    summary.map(item=>{
      item.dataCharge="$"+item.dataCharge;
      item.planBill="$"+item.planBill;
      item.totalBill="$"+item.totalBill;
      item.additionalCharges="$"+item.additionalCharges;
    });
    return summary;
  }

}

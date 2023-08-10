import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SummaryService } from '../services/summary.service';
import { ISummary } from '../models/ISummary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  summary: ISummary[] = [];
  constructor(private summaryService: SummaryService) {}
  ngOnInit() {
    this.summary = this.summaryService.getSummary();
  }
}

import { Injectable } from '@angular/core';
import { ISummary } from '../models/ISummary';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor() {}

  summary: ISummary[] = [];

  setSummary(summary: ISummary[]) {
    this.summary = summary;
  }
  getSummary() {
    return this.summary;
  }
}

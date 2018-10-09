import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  countryCode = new BehaviorSubject('mx');
  CC = this.countryCode.asObservable();
  storeNumber = new BehaviorSubject('3511');
  SN = this.storeNumber.asObservable();

  filterType = new BehaviorSubject('Tienda');
  filter = this.filterType.asObservable();
  frequencyType = new BehaviorSubject('Día');
  frequency = this.frequencyType.asObservable();

  serviceData = new ReplaySubject(1);
  data = this.serviceData.asObservable();
  verifiers = new ReplaySubject(1);
  verifiersArray = this.verifiers.asObservable();

  selectedDate = new ReplaySubject(1);
  date = this.selectedDate.asObservable();
  selectedRangeDate = new ReplaySubject(1);
  rangeDate = this.selectedRangeDate.asObservable();

  constructor() { }

  updateFilterType(value) {
    this.filterType.next(value);
  }

  updateFrequencyType(value) {
    this.frequencyType.next(value);
  }

  updateServiceData(value) {
    this.serviceData.next(value);
  }

  updateVerifiers(value) {
    this.verifiers.next(value);
  }

  updateSelectedDate(value) {
    this.selectedDate.next(value);
  }

  updateSelectedRangeDate(value) {
    this.selectedRangeDate.next(value);
  }
}

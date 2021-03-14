import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerServices: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerServices.show(undefined, {
      type: 'pacman',
      bdColor: 'rgba(255,255,255,0.7)',
      color:'#78c2ad'
    });
  }

  idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerServices.hide();
    }
  }
}

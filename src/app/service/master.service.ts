import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  subjectstatus$ = new Subject<number>();
  bsubjectstatus$ = new BehaviorSubject<string>("Not Started");
  rsubjectstatus$ = new ReplaySubject<number>(3);
  asubjectstatus$ = new AsyncSubject<string>();

  StatusInfo() {
    const deliverystatus$ = new Observable(item => {
      item.next("Created");

      setTimeout(() => {
        item.next('Ordered Processed');
      }, 2000)

      setTimeout(() => {
        item.next('Ordered Confirmed');
      }, 4000)

      setTimeout(() => {
        item.next('Out of Delivery');
      }, 6000)

      setTimeout(() => {
        item.next('Delivered');
      }, 8000)

    })
    return deliverystatus$;
  }
}

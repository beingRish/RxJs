import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  title = 'RxJS Observable'

  users: any;
  userObservable$: any;
  currentStatus: any;

  ngOnInit(): void {

    // Convert any array into observable

    this.users = ['ram', 'rajan', 'rahul'];

    this.userObservable$ = of(this.users);

    // new observable
    new Observable(item => {

      setTimeout(() => {
        item.next('In Progress')
      }, 2000);

      setTimeout(() => {
        item.next('Pending')
      }, 4000);

      setTimeout(() => {
        item.next('Completed')
      }, 6000);
    }).subscribe(result => {
      this.currentStatus = result;
    })

  }


}

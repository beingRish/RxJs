import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RxJs';

  users: any;
  userObservable$: any;
  currentStatus : any;

  ngOnInit(): void {

    // Convert any array into observable

      this.users = ['ram', 'rajan', 'rahul'];

      this.userObservable$ = of(this.users);

      console.log((this.userObservable$));

      // new observable
      new Observable (item => {

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

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJs';

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
  status: any;
  constructor(private service: MasterService) {

    this.service.StatusInfo().subscribe(item => {
      this.status = item;
    })

    this.service.asubjectstatus$.subscribe(x => console.log("subject from app", + x));
    
    this.service.asubjectstatus$.next("New");
    this.service.asubjectstatus$.next("Open");
    this.service.asubjectstatus$.next("active");
    this.service.asubjectstatus$.next("clossed");
    this.service.asubjectstatus$.complete();
    
    
    // setTimeout(() => {
    //   this.service.bsubjectstatus$.next("In Progress");
    // }, 2000)

    // setTimeout(() => {
    //   this.service.bsubjectstatus$.next("completed");
    // }, 4000)
  }
}


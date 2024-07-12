import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  title = 'RxJS Subject'

  status: any;
  constructor(private service: MasterService) {

    this.service.StatusInfo().subscribe(item => {
      this.status = item;
    })

    this.service.asubjectstatus$.subscribe(x => {
      console.log("subject from app", + x)
    });
    
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

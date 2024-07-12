import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private service: MasterService){
    this.service.rsubjectstatus$.subscribe(x => console.log("subject from home",+ x));

    setTimeout(() => {
      this.service.bsubjectstatus$.next("Planning");
    }, 3000)

  }

  ngOnInit(): void {
    
  }
}

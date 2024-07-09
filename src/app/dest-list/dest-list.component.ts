import { Component, OnInit } from '@angular/core';
import { DestService } from '../service/dest.service';

@Component({
  selector: 'app-dest-list',
  templateUrl: './dest-list.component.html',
  styleUrls: ['./dest-list.component.css']
})
export class DestListComponent implements OnInit{
  destlist$ : any;

  constructor(private service: DestService){}

  ngOnInit(): void {
      this.Getall();
  }

  Getall(){
    this.service.GetAll().subscribe(result => {
      this.destlist$ = result;
    })
  }
}

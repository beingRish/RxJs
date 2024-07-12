import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-oprators',
  templateUrl: './oprators.component.html',
  styleUrls: ['./oprators.component.css']
})
export class OpratorsComponent {
  title = 'RxJS Operators'
  array = [2, 3, 4]

  constructor() {
    const result = of(1, 2, 3, 4);
    result.pipe(map(x=>x*10)).subscribe(x=>console.log(x))
    
    
    const result1 = of(this.array);
    console.log(result1);
    
    
    
    
  }
}

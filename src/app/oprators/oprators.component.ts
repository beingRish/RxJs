import { Component } from '@angular/core';
import { concat, distinct, filter, first, from, interval, last, map, merge, of, range, skip, take, tap, toArray, zip } from 'rxjs';

@Component({
  selector: 'app-oprators',
  templateUrl: './oprators.component.html',
  styleUrls: ['./oprators.component.css']
})
export class OpratorsComponent {
  title = 'RxJS Operators'

  array = [2, 3, 4]

  constructor() {

    console.log('========== of, from ==========');
    const result1 = of(this.array);
    const result2 = from(this.array);
    result1.subscribe(x => console.log('of->',x));
    result2.subscribe(x => console.log('from->',x));
    
    
    console.log('========== range ==========');
    const result3 = range(3,4)
    result3.subscribe(x => console.log('range->',x));
    

    console.log('========== distinct ==========');
    const result4 = of(5,2,3,4,4,5)
    result4.pipe(distinct()).subscribe(x => console.log('distinct->',x));
    

    console.log('========== first ==========');
    const result5 = of(65,2,3,4,4,5)
    result5.pipe(first()).subscribe(x => console.log('first->',x));
    
    console.log('========== last ==========');
    const result6 = of(65,2,3,4,4,5)
    result6.pipe(last()).subscribe(x => console.log('last->',x));

    console.log('========== filter ==========');
    const result7 = of(65,2,3,4,4,5)
    result7.pipe(filter(x=>x>4)).subscribe(x => console.log('filter->',x));

    console.log('========== skip ==========');
    const result8 = of(65,2,3,4,4,5)
    result8.pipe(skip(3)).subscribe(x => console.log('skip->',x));

    console.log('========== take ==========');
    const result9 = of(65,2,3,4,4,5)
    result9.pipe(take(3)).subscribe(x => console.log('take->',x));

    console.log('========== interval ==========');
    const inter = interval(1000)
    // inter.pipe(take(5)).subscribe(x => console.log('interval->', x))
    
    console.log('========== Toarray ==========');
    const result10 = of(65,2,3,4,4,5)
    result10.pipe(toArray()).subscribe(x => console.log('toArray->', x))

    console.log('========== map ==========');
    const result11 = of(65,2,3,4,4,5)
    result11.pipe(map(x=>x*10)).subscribe(x => console.log('map->', x))

    console.log('========== tap ==========');
    const result12 = of(65,2,3,4,4,5)
    result12.pipe(tap(x=>x*10)).subscribe(x => console.log('tap->', x))

    console.log('========== concat ==========');
    const interval1 = interval(1000).pipe(take(3))
    const interval2 = interval(2000).pipe(take(3))
    const interval3 = interval(3000).pipe(take(2))
    
    const result13 = concat(interval1, interval2, interval3)

    // result13.subscribe(x=>console.log(x))

    console.log('========== merge ==========');
    const interval4 = interval(1000).pipe(take(3))
    const interval5 = interval(1000).pipe(take(3))
    const interval6 = interval(1000).pipe(take(2))
    
    const result14 = merge(interval4, interval5, interval6)
    // result14.subscribe(x=>console.log(x))


    console.log('========== zip ==========');

    let age$ = of(27, 25, 29);
    let name$ = of('Foo', 'Bar', 'test');
    let isDev$ = of(true, true, true);

    zip(age$, name$, isDev$).pipe(
      map(([age, name, isDev]) => ({ age, name, isDev}))
    )
    .subscribe(x => console.log('zip ->', x));
  }

}

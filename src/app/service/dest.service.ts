import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, Subject, map, tap } from 'rxjs';
import { Designation } from '../Model/designation';

@Injectable({
  providedIn: 'root'
})
export class DestService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  GetAll() : Observable<Object>{
    return this.http.get(this.apiUrl);
  }

  GetbyCode(code: string): Observable<Object> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((designations: any[]) => designations.find(designation => designation.code === code))
    );
  }

  Save(inputData: any): Observable<any>{
    return this.http.get<any>(this.apiUrl, inputData).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestService {
  apiurl = 'https://localhost:4200/designation';

  constructor(private http: HttpClient) { }

  GetAll() : Observable<object>{
    return this.http.get(this.apiurl);
  }
}

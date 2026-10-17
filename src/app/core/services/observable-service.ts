import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor(private http: HttpClient){}
  getProducts(): Observable<any>{
    return this.http.get('https://dummyjson.com/products');
  }
  // getNumber(): Observable<number>{
  //   return new Observable((observer)=>{
  //      observer.next(10);
  //      observer.next(20);
  //      observer.next(15);
  //      observer.complete();
  //   });
  // }
}

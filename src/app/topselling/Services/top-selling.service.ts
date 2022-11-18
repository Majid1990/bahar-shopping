import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { TopSellingItems } from '../model/top-selling.data';
import { ITopSelling } from '../model/top-selling.model';


@Injectable({
  providedIn: 'root'
})
export class TopSellingService {

  constructor(private http: HttpClient) { }


  getTopSellingItems(): Observable<ITopSelling[]> {
    //return  this.http.get('') 
    return of(TopSellingItems)
  }
  // getTopSellingPhoneItems() {
  //   // return  this.http.get()
  // }
  // getTopSellingPenItems() {
  //   // return  this.http.get()
  // }
  // getTopSellingTVItems() {
  //   // return  this.http.get()
  // }
}

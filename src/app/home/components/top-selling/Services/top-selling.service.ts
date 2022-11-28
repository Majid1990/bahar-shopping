import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { PRODUCT_DATA } from 'src/app/model/product.data';
import { Product } from 'src/app/model/product.model';
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
    //.pipe(delay(1000))
  }

  getProductDetail(id: number): Observable<Product> {
    return of(PRODUCT_DATA.find(p => p.id === id)!)
  }

}

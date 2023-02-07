import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCT_DATA } from 'src/app/model/product.data';
import { Product } from 'src/app/model/product.model';
import { TopSellingItems } from '../model/top-seller.data';
import { ITopSelling } from '../model/top-seller.model';

@Injectable({
  providedIn: 'root',
})
export class TopSellerService {
  constructor(private http: HttpClient) {}

  getTopSellingItems(): Observable<ITopSelling[]> {
    return of(TopSellingItems);
  }

  getProductDetail(id: number): Observable<Product> {
    return of(PRODUCT_DATA.find((p) => p.id === id)!);
  }
}

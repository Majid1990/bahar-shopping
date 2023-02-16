import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BestSellerParcel, BEST_SELLING_DATA } from '../model/best-seller.data';
import { BestSeller } from '../model/best-seller.model';

@Injectable({
  providedIn: 'root',
})
export class BestSellerService {
  detail: any;
  getBestSellingData(): Observable<BestSeller[]> {
    return of(BEST_SELLING_DATA);
  }
  getBestSellingParcel(): Observable<BestSeller[]> {
    return of(BestSellerParcel);
  }
  getBestSellingDetail(id: number): Observable<BestSeller | undefined> {
    return this.getBestSellingData().pipe(
      map((bestsellers) => bestsellers.find((x) => x.id === id))
    );
  }
  getBestSellingDetail2(id: number): Observable<BestSeller | undefined> {
    return this.getBestSellingParcel().pipe(
      map((bestsellers) => bestsellers.find((x) => x.id === id))
    );
  }
}

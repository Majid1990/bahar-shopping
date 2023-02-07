import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BEST_SELLING_DATA } from '../model/best-seller.data';
import { BestSeller } from '../model/best-seller.model';

@Injectable({
  providedIn: 'root',
})
export class BestSellerService {
  detail: any;
  getBestSellingData(): Observable<BestSeller[]> {
    return of(BEST_SELLING_DATA);
  }
  getBestSellingDetail(eve: any) {
    this.detail = eve;
  }
}

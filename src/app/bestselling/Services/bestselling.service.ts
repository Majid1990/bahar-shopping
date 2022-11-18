import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BestSeller } from '../model/best-seller.model';
import { BEST_SELLING_DATA } from '../model/best-selling.data';

@Injectable({
  providedIn: 'root'
})
export class BestsellingService {

  constructor() { }

  getBestSellingData(): Observable<BestSeller[]> {
    return of(BEST_SELLING_DATA)
  }
}

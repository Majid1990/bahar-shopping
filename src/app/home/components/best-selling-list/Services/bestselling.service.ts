import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BestSeller } from '../Model/best-seller.model';
import { BEST_SELLING_DATA } from '../Model/best-selling.data';

@Injectable({
  providedIn: 'root'
})
export class BestsellingService {

  constructor() { }

  getBestSellingData(): Observable<BestSeller[]> {
    return of(BEST_SELLING_DATA)
  }
}

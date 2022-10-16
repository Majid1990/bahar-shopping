import { Component, OnInit } from '@angular/core';
import { BestSeller } from './model/best-seller.model';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.scss']
})
export class BestsellingComponent implements OnInit {
  bestSellers: BestSeller[] = [
    { imageUrl: '../../../../assets/body-11.jpg', name: 'Shirt', availableStock: 123, price: '235.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },
    { imageUrl: '../../../../assets/khame.jpg', name: 'Cream', availableStock: 1857, price: '5.56' },
    { imageUrl: '../../../../assets/khame.jpg', name: 'Body', availableStock: 17, price: '50.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' },]

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
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
    { imageUrl: '../../../../assets/molfix.jpg', name: 'TV', availableStock: 857, price: '2035.56' }]
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource: PeriodicElement[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];;
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
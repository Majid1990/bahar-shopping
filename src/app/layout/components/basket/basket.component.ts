import { Component } from '@angular/core';
import { BasketService } from './service/basket.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  constructor(public basketService: BasketService, public dialog: MatDialog) {}
}

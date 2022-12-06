import { Component, OnInit } from '@angular/core';
import { BasketService } from './service/basket.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  quantity: number = 0;
  constructor(public basketService: BasketService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

}

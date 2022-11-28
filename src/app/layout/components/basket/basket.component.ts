import { Component, OnInit } from '@angular/core';
import { BasketService } from './service/basket.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderedlistComponent } from './orderedlist/orderedlist.component';
import { LoginComponent } from './login/login.component';
//import { ITopSellingItem } from 'src/app/topselling/model/top-selling.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  // data: any;
  quantity: number = 0;
  constructor(public basketService: BasketService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.basketService.orders(x).subscribe(x => {
    //   debugger
    //   console.log(x)
    //   this.quantity = x;
    // })
    // this.basketService.basketItemsCounter$.subscribe((x) => {
    //   this.quantity = x
    // })
  }

  openDialog() {
    this.dialog.open(OrderedlistComponent, {
      width: '80%',
      height: '80%',
      data: {}
    });
  }
  // openDialogLogin() {
  //   this.dialog.open(LoginComponent, {
  //     width: '38%',
  //     height: '70%',
  //     data: {}
  //   });
  // }

}

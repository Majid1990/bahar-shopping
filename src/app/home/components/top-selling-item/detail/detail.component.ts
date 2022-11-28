import { Component, OnInit, Inject, Input } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Product } from 'src/app/model/product.model';
import { ITopSellingItem } from '../../top-selling/model/top-selling.model';
import { TopSellingService } from '../../top-selling/Services/top-selling.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  itemData: ITopSellingItem[] = []
  productDetail: Product = { id: 0 };
  id: number = 0;
  constructor(private topSellingService: TopSellingService,
    private basketService: BasketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
    });

    this.topSellingService.getProductDetail(this.id).subscribe(x => {
      debugger
      this.productDetail = x
    })
  }
  addToOrder(data: any) {
    this.basketService.addOrders(data)
  }

}

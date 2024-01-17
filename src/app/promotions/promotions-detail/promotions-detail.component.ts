import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Product } from 'src/app/model/product.model';
import { OrderConfirmNotificationComponent } from 'src/app/orders/order-confirm-notification/order-confirm-notification.component';
import { BestSeller } from 'src/app/shared/model/best-seller.model';

@Component({
  selector: 'app-promotions-detail',
  templateUrl: './promotions-detail.component.html',
  styleUrls: ['./promotions-detail.component.scss'],
})
export class PromotionsDetailComponent implements OnInit {
  promotionsProducts: BestSeller[] = [];
  selectedItem?: BestSeller;
  productDetail: Product = { id: 0, price: '' };
  id?: number;
  durationInSeconds = 2;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private basketService: BasketService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.magnify({ imgID: 'myimage', zoom: 3 });
    window.scrollTo(0, 0);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = +params['id'];
    });
    this.http
      .get(
        'https://best-seller-b46d8-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .subscribe((obj) => {
        let property: keyof typeof obj;
        for (property in obj) {
          const user = obj[property];
          this.promotionsProducts.push(user as unknown as BestSeller);
        }
        this.selectedMethos();
      });
  }

  selectedMethos() {
    this.promotionsProducts.find((x) => {
      if (+x.id === this.id) {
        this.selectedItem = x;
      }
    });
  }
  backToTopSelling(eve: any) {}
  showInDetail() {}
  addToOrder(item: any) {
    this.basketService.addOrders(item);
    this.openSnackBar();
  }
  private openSnackBar() {
    this._snackBar.openFromComponent(OrderConfirmNotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  back() {
    this.router.navigate;
  }

  // Started the Magnifier from the next line

  // imgID = 'Angular';

  // magnify({ imgID, zoom }: { imgID: any; zoom: any }) {
  //   var img: any, glass: any, w: any, h: any, bw: any;
  //   img = document.getElementById(imgID);
  //   /*create magnifier glass:*/
  //   glass = document.createElement('DIV');
  //   glass.setAttribute('class', 'img-magnifier-glass');
  //   /*insert magnifier glass:*/
  //   img.parentElement.insertBefore(glass, img);
  //   /*set background properties for the magnifier glass:*/
  //   glass.style.backgroundImage = "url('" + img.src + "')";
  //   glass.style.backgroundRepeat = 'no-repeat';
  //   glass.style.backgroundSize =
  //     img.width * zoom + 'px ' + img.height * zoom + 'px';
  //   bw = 3;
  //   w = glass.offsetWidth / 2;
  //   h = glass.offsetHeight / 2;
  //   /*execute a function when someone moves the magnifier glass over the image:*/
  //   glass.addEventListener('mousemove', moveMagnifier);
  //   img.addEventListener('mousemove', moveMagnifier);
  //   /*and also for touch screens:*/
  //   glass.addEventListener('touchmove', moveMagnifier);
  //   img.addEventListener('touchmove', moveMagnifier);
  //   function moveMagnifier(e: any) {
  //     var pos, x, y;
  //     /*prevent any other actions that may occur when moving over the image*/
  //     e.preventDefault();
  //     /*get the cursor's x and y positions:*/
  //     pos = getCursorPos(e);
  //     x = pos.x;
  //     y = pos.y;
  //     /*prevent the magnifier glass from being positioned outside the image:*/
  //     if (x > img.width - w / zoom) {
  //       x = img.width - w / zoom;
  //     }
  //     if (x < w / zoom) {
  //       x = w / zoom;
  //     }
  //     if (y > img.height - h / zoom) {
  //       y = img.height - h / zoom;
  //     }
  //     if (y < h / zoom) {
  //       y = h / zoom;
  //     }
  //     /*set the position of the magnifier glass:*/
  //     glass.style.left = x - w + 'px';
  //     glass.style.top = y - h + 'px';
  //     /*display what the magnifier glass "sees":*/
  //     glass.style.backgroundPosition =
  //       '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
  //   }
  //   function getCursorPos(e: any) {
  //     var a,
  //       x = 0,
  //       y = 0;
  //     e = e || window.event;
  //     /*get the x and y positions of the image:*/
  //     a = img.getBoundingClientRect();
  //     /*calculate the cursor's x and y coordinates, relative to the image:*/
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /*consider any page scrolling:*/
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return { x: x, y: y };
  //   }
  // }
}

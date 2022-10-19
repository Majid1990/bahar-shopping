import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // @HostListener("window:scroll", []) onWindowScroll() {
  //   // do some stuff here when the window is scrolled
  //   const verticalOffset = window.pageYOffset
  //     || document.documentElement.scrollTop
  //     || document.body.scrollTop || 0;
  // }


  productsVisibility: boolean = false;


  ngOnInit(): void { }

  onScroll(eve: any) { }

}

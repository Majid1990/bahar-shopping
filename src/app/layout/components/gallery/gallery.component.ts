import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  advertismentimages: any[] = ['../../../../assets/galery2.jpg', '../../../../assets/gallery3.jpg', '../../../../assets/gallery1.jpg', '../../../../assets/gallery4.gif'];
  selectedAdvertismentIndex: number = 0;
  selectedAdvertismentImageUrl: string = '../../../../assets/gallery1.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  nextImage() {
    this.selectedAdvertismentIndex++
    if (this.selectedAdvertismentIndex === this.advertismentimages.length) {
      this.selectedAdvertismentIndex = 0;
    }
    this.selectedAdvertismentImageUrl = this.advertismentimages.find((val, i) => i === this.selectedAdvertismentIndex)

  }

  backImage() {
    this.selectedAdvertismentIndex--
    if (this.selectedAdvertismentIndex === -1) {
      this.selectedAdvertismentIndex = this.advertismentimages.length - 1;
    }
    this.selectedAdvertismentImageUrl = this.advertismentimages.find((val, i) => i === this.selectedAdvertismentIndex)
  }

}

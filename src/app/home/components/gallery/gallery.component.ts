import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  advertismentimages: any[] = [
    '../../../../assets/gallery/gallery.jpg',
    '../../../../assets/gallery/gallery1.jpg',
    '../../../../assets/gallery/galery2.jpg',
    '../../../../assets/gallery/gallery3.jpg',
    '../../../../assets/gallery/gallery4.gif',
    '../../../../assets/gallery/gallery5.jpg',
    '../../../../assets/gallery/galery6.jpg',
    '../../../../assets/gallery/gallery7.jpg',
  ];
  selectedAdvertismentIndex: number = 0;
  selectedAdvertismentImageUrl: string =
    '../../../../assets/gallery/gallery7.jpg';

  nextImage() {
    this.selectedAdvertismentIndex++;
    if (this.selectedAdvertismentIndex === this.advertismentimages.length) {
      this.selectedAdvertismentIndex = 0;
    }
    this.selectedAdvertismentImageUrl = this.advertismentimages.find(
      (val, i) => i === this.selectedAdvertismentIndex
    );
  }

  backImage() {
    this.selectedAdvertismentIndex--;
    if (this.selectedAdvertismentIndex === -1) {
      this.selectedAdvertismentIndex = this.advertismentimages.length - 1;
    }
    this.selectedAdvertismentImageUrl = this.advertismentimages.find(
      (val, i) => i === this.selectedAdvertismentIndex
    );
  }
}

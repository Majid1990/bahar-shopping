import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bahar-shopping';

  advertismentimages: any[] = ['../assets/images.jpg', '../assets/12.jpg', '../assets/10.jpg',
    '../assets/iphone_13_pro_max_.webp', '../assets/note-10.jpg'];
  selectedAdvertismentIndex: number = 0;
  selectedAdvertismentImageUrl: string = '../assets/images.jpg';

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

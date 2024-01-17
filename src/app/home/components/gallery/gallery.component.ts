import { Component, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  advertismentimages: any[] = [];
  selectedAdvertismentIndex: number = 0;
  selectedAdvertismentImageUrl: string =
    '../../../../assets/gallery/gallery-8.jpg';
  timerSubscription?: Subscription;
  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.timerSubscription = timer(0, 5000)
      .pipe(
        map(() => {
          this.nextImage();
        })
      )
      .subscribe();

    this.galleryService.getGalleryData().subscribe((x) => {
      this.advertismentimages = x;
    });
  }

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

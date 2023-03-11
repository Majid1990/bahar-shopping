import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GALLERY_DATA_PICTURE } from './gallery.data';
import { Gallery } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService implements OnInit {
  galerData: Gallery[] = [];

  constructor() {}
  ngOnInit(): void {}

  getGalleryData(): Observable<any> {
    return of(GALLERY_DATA_PICTURE);
  }
}

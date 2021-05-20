import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showGalleryValue: boolean = false;
  @Output() showGalleryEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  public showGallery(showGalleryValue: boolean) {
    this.showGalleryValue = showGalleryValue;
    this.showGalleryEvent.emit(showGalleryValue);
  }
}

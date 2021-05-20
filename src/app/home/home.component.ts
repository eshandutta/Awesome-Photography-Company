import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showGalleryValue: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  public showGallery(showGalleryValue: boolean) {
    this.showGalleryValue = showGalleryValue;
    //alert(showGalleryValue);
  }
}

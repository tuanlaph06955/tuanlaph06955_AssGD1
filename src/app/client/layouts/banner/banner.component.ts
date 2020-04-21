import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../Banner';
import { BannerService } from './../../../banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.getBanner();
  }

  banners: Banner[] = [];

  getBanner(){
    return this.bannerService.getBanner().subscribe(data => {
      this.banners = data;
    });
  }


}

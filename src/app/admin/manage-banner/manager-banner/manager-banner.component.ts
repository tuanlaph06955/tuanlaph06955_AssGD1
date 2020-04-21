import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../Banner';
import { BannerService } from './../../../banner.service';

@Component({
  selector: 'app-manager-banner',
  templateUrl: './manager-banner.component.html',
  styleUrls: ['./manager-banner.component.scss']
})
export class ManagerBannerComponent implements OnInit {

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

  removeBanner(id : number){
    return this.bannerService.deteleBanner(id).subscribe(data => {
      this.updateNewData(id);
    })
  }
  updateNewData(id : number){
    let i = 0;
    this.banners.map(x => {
      if (x.id === id) {
        this.banners.splice(i, 1);
      }
      i++;
    });
  }
}

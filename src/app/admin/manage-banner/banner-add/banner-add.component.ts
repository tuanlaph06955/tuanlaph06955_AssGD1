import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Banner } from '../../../Banner';
import { BannerService } from './../../../banner.service';


@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {

  banner:Banner = new Banner();
  constructor(
  private bannerService : BannerService,
  private route: Router,
  ) { }

  ngOnInit(): void {
  }
  addBanner(){
    return this.bannerService.addBanner(this.banner).subscribe(data =>{
      if(data && data.id){
        this.route.navigateByUrl('/admin/banner');
      }
    })
  }

}

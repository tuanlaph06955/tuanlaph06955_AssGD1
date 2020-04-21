import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from '../../../Banner';
import { BannerService } from './../../../banner.service';


@Component({
  selector: 'app-banner-update',
  templateUrl: './banner-update.component.html',
  styleUrls: ['./banner-update.component.scss']
})
export class BannerUpdateComponent implements OnInit {

  banner:Banner;
  constructor(
    private bannerService: BannerService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getIdBanner();
  }

  getIdBanner(){
    this.activatedRoute.params.subscribe(product =>{
      this.bannerService.getBannerByID(product.id).subscribe(data => {
        this.banner = data;
      })
    })
  }

  updateBanner(){
    this.bannerService.updateBanner(this.banner).subscribe(data => {
      this.route.navigateByUrl('/admin/banner');
    })
  }

}

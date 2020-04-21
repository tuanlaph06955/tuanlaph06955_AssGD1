import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductRoutingModule } from './client/products/product-routing.module';
import { NewRoutingModule } from './client/layouts/news/new-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './client/layouts/menu/menu.component';
import { BannerComponent } from './client/layouts/banner/banner.component';
import { ProductComponent } from './client/products/product/product.component';
import { CategoryComponent } from './client/layouts/category/category.component';
import { FooterComponent } from './client/layouts/footer/footer.component';
import { ListProductComponent } from './client/products/list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { ProductManagerComponent } from './admin/manager-products/product-manager/product-manager.component';
import { ProductAddComponent } from './admin/manager-products/product-add/product-add.component';
import { ManagerPDetailComponent } from './admin/manager-products/manager-p-detail/manager-p-detail.component';
import { ProductDetailComponent } from './client/products/product-detail/product-detail.component';
import { ProductUpdateComponent } from './admin/manager-products/product-update/product-update.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { HeaderComponent } from './admin/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './client/layouts/home/home.component';
import { ContentComponent } from './admin/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './client/layouts/about/about.component';
import { ContactComponent } from './client/layouts/contact/contact.component';
import { FooterBeComponent } from './admin/footer-be/footer-be.component';
import { ManagerBannerComponent } from './admin/manage-banner/manager-banner/manager-banner.component';
import { BannerAddComponent } from './admin/manage-banner/banner-add/banner-add.component';
import { BannerUpdateComponent } from './admin/manage-banner/banner-update/banner-update.component';
import { NewComponent } from './client/layouts/news/new/new.component';
import { NewDetailComponent } from './client/layouts/news/new-detail/new-detail.component';
import { NewAdminComponent } from './admin/manage-new/new-admin/new-admin.component';
import { NewDetailAdminComponent } from './admin/manage-new/new-detail-admin/new-detail-admin.component';
import { NewAddAdminComponent } from './admin/manage-new/new-add-admin/new-add-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent,
    ListProductComponent,
    ProductManagerComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    SideBarComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    ContentComponent,
    ManagerPDetailComponent,
    AboutComponent,
    ContactComponent,
    FooterBeComponent,
    ManagerBannerComponent,
    BannerAddComponent,
    BannerUpdateComponent,
    NewComponent,
    NewDetailComponent,
    NewAdminComponent,
    NewDetailAdminComponent,
    NewAddAdminComponent,
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminRoutingModule,
    NgbModule,
    NewRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
